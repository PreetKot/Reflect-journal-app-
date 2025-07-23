"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { useUser } from "@clerk/nextjs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { getAnalytics } from "@/actions/analytics";
import { getMoodById, getMoodTrend } from "@/app/lib/moods";
import useFetch from "@/hooks/use-fetch";
import MoodAnalyticsSkeleton from "./analytics-loading";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const timeOptions = [
  { value: "7d", label: "Last 7 Days" },
  { value: "15d", label: "Last 15 Days" },
  { value: "30d", label: "Last 30 Days" },
];

const MoodAnalytics = () => {
  const [period, setPeriod] = useState("7d");
  const { isLoaded } = useUser();

  const {
    loading,
    data: analytics,
    fn: fetchAnalytics,
  } = useFetch(getAnalytics);

  useEffect(() => {
    fetchAnalytics(period);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [period]);

  const CustomTooltip = useMemo(
    () => {
      const TooltipComponent = ({ active, payload, label }) => {
        if (active && payload?.length) {
          return (
            <div className="bg-white p-4 border rounded-lg shadow-lg">
              <p className="font-medium">{format(parseISO(label), "MMM d, yyyy")}</p>
              <p className="text-orange-600">Average Mood: {payload[0].value}</p>
              <p className="text-blue-600">Entries: {payload[1].value}</p>
            </div>
          );
        }
        return null;
      };
      TooltipComponent.displayName = "CustomTooltip";
      return TooltipComponent;
    },
    []
  );

  if (loading || !isLoaded || !analytics?.data) {
    return <MoodAnalyticsSkeleton />;
  }

  const { timeline = [], stats = {}, entries = [] } = analytics.data;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dashboard</h1>
        <Select value={period} onValueChange={setPeriod}>
          <SelectTrigger className="w-[140px] border-blue-200 focus:ring-blue-500">
            <SelectValue placeholder="Select Range" />
          </SelectTrigger>
          <SelectContent>
            {timeOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {entries.length === 0 ? (
        <div className="text-center py-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200">
          <p className="text-gray-600 text-lg mb-4">
            No entries found. Start writing to see your analytics! ✨
          </p>
          <Link href="/journal/write" className="text-blue-600 hover:text-blue-700 underline font-medium">
            Write your first entry
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Stats Cards */}
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-blue-700">Total Entries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-800">{stats.totalEntries ?? 0}</div>
                <p className="text-xs text-blue-600">
                  ~{stats.dailyAverage ?? 0} per day
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-purple-700">Average Mood</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-800">{stats.averageScore ?? 0}/10</div>
                <p className="text-xs text-purple-600">Overall mood score</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-green-700">Most Common Mood</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-800 flex items-center gap-2">
                  {getMoodById(stats.mostFrequentMood)?.emoji ?? "🙂"}
                  {getMoodTrend(stats.averageScore ?? 0)}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Simple Mood Chart */}
          <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-indigo-800">Mood Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={timeline}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                    <XAxis
                      dataKey="date"
                      tickFormatter={(date) => format(parseISO(date), "MMM d")}
                      stroke="#6366f1"
                    />
                    <YAxis domain={[0, 10]} stroke="#6366f1" />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                      type="monotone"
                      dataKey="averageScore"
                      stroke="url(#gradient)"
                      name="Average Mood"
                      strokeWidth={3}
                      dot={{ fill: "#6366f1", strokeWidth: 2, r: 4 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="50%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default MoodAnalytics;
