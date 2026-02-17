import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowSquareOut } from "@phosphor-icons/react";

interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
}

interface ContestRating {
  rating: number;
  history: Array<{ month: string; rating: number }>;
}

export const LeetCode = () => {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [contest, setContest] = useState<ContestRating | null>(null);
  const [submissions, setSubmissions] = useState<Array<{ date: string; count: number }>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statsRes = await fetch(
          `https://alfa-leetcode-api.onrender.com/oVinayyy`,
          { signal: AbortSignal.timeout(8000) }
        );
        
        if (statsRes.ok) {
          const data = await statsRes.json();
          setStats({
            totalSolved: data.totalSolved || 0,
            totalQuestions: data.totalQuestions || 0,
            easySolved: data.easySolved || 0,
            mediumSolved: data.mediumSolved || 0,
            hardSolved: data.hardSolved || 0,
            acceptanceRate: parseFloat(data.acceptanceRate) || 0,
          });

          // Mock contest rating data
          const mockHistory = [
            { month: "Jan", rating: 1450 },
            { month: "Feb", rating: 1520 },
            { month: "Mar", rating: 1580 },
            { month: "Apr", rating: 1620 },
            { month: "May", rating: 1680 },
            { month: "Jun", rating: 1750 },
          ];
          setContest({
            rating: 1750,
            history: mockHistory,
          });
        }

        // Fetch submission calendar
        const subRes = await fetch(
          `https://alfa-leetcode-api.onrender.com/userSubmissionCalendar/oVinayyy`,
          { signal: AbortSignal.timeout(8000) }
        );

        if (subRes.ok) {
          const subData = await subRes.json();
          setSubmissions(subData.lastMonthSubmission || []);
        }
      } catch (err) {
        console.log("[v0] Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const getHeatmapColor = (count: number) => {
    if (count === 0) return "bg-white/5 hover:bg-white/10";
    if (count === 1) return "bg-green-500/30 hover:bg-green-500/40";
    if (count <= 3) return "bg-green-500/60 hover:bg-green-500/70";
    return "bg-green-500/90 hover:bg-green-500";
  };

  if (loading) {
    return (
      <div className="px-2 md:px-4 py-8 flex justify-center items-center">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60 text-sm"
        >
          Loading LeetCode stats...
        </motion.div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="px-2 md:px-4 py-8 text-center">
        <p className="text-white/60 text-sm">Stats unavailable</p>
      </div>
    );
  }

  const percentage = ((stats.totalSolved / stats.totalQuestions) * 100).toFixed(1);
  const maxRating = Math.max(...(contest?.history.map(h => h.rating) || [1500]));

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="px-2 md:px-4"
    >
      <div className="flex flex-col gap-8 font-mono text-white">
        {/* Heading */}
        <motion.div variants={itemVariants} className="text-2xl font-bold text-center">
          LEETCODE
        </motion.div>

        {/* Username Link */}
        <motion.div variants={itemVariants}>
          <motion.a
            href="https://leetcode.com/oVinayyy"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            className="group inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span className="text-white/90 font-bold">oVinayyy</span>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowSquareOut size={16} />
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3">
          {/* Total Solved */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -2 }}
            className="border border-white/15 rounded-sm p-3 bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            <div className="text-white/60 text-xs mb-1">Solved</div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="text-xl sm:text-2xl font-bold text-white"
            >
              {stats.totalSolved}
            </motion.div>
            <div className="text-xs text-white/40 mt-0.5">{percentage}%</div>
          </motion.div>

          {/* Easy */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -2 }}
            className="border border-green-500/20 rounded-sm p-3 bg-green-500/10 hover:bg-green-500/20 transition-all duration-300"
          >
            <div className="text-green-400/70 text-xs mb-1">Easy</div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, type: "spring", stiffness: 100 }}
              className="text-xl sm:text-2xl font-bold text-green-400"
            >
              {stats.easySolved}
            </motion.div>
          </motion.div>

          {/* Medium */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -2 }}
            className="border border-yellow-500/20 rounded-sm p-3 bg-yellow-500/10 hover:bg-yellow-500/20 transition-all duration-300"
          >
            <div className="text-yellow-400/70 text-xs mb-1">Medium</div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="text-xl sm:text-2xl font-bold text-yellow-400"
            >
              {stats.mediumSolved}
            </motion.div>
          </motion.div>

          {/* Hard */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -2 }}
            className="border border-red-500/20 rounded-sm p-3 bg-red-500/10 hover:bg-red-500/20 transition-all duration-300"
          >
            <div className="text-red-400/70 text-xs mb-1">Hard</div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, type: "spring", stiffness: 100 }}
              className="text-xl sm:text-2xl font-bold text-red-400"
            >
              {stats.hardSolved}
            </motion.div>
          </motion.div>

          {/* Acceptance Rate */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -2 }}
            className="border border-blue-500/20 rounded-sm p-3 bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-300"
          >
            <div className="text-blue-400/70 text-xs mb-1">Accept</div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              className="text-xl sm:text-2xl font-bold text-blue-400"
            >
              {stats.acceptanceRate}%
            </motion.div>
          </motion.div>
        </div>

        {/* Contest Rating Section */}
        {contest && (
          <motion.div variants={itemVariants} className="border border-white/15 rounded-sm p-4 bg-white/5">
            <div className="flex items-center justify-between mb-4">
              <div className="text-white/90 text-sm font-bold">Contest Rating</div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="text-2xl font-bold text-blue-400"
              >
                {contest.rating}
              </motion.div>
            </div>

            {/* Mini Chart */}
            <div className="flex items-end justify-between gap-1 h-16">
              {contest.history.map((point, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center gap-1 flex-1"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: `${(point.rating / maxRating) * 100}%`, opacity: 1 }}
                    transition={{ delay: 0.5 + idx * 0.05, duration: 0.6 }}
                    className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-sm min-h-1"
                    title={`${point.month}: ${point.rating}`}
                  />
                  <div className="text-xs text-white/40 mt-1">{point.month}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Submission Heatmap */}
        {submissions.length > 0 && (
          <motion.div variants={itemVariants} className="border border-white/15 rounded-sm p-4 bg-white/5">
            <div className="text-white/90 text-sm font-bold mb-4">Submission Activity</div>
            
            {/* Heatmap Grid */}
            <div className="flex gap-1 overflow-x-auto pb-4">
              {Array.from({ length: 52 }).map((_, weekIdx) => (
                <div key={weekIdx} className="flex flex-col gap-0.5">
                  {Array.from({ length: 7 }).map((_, dayIdx) => {
                    const dataIdx = weekIdx * 7 + dayIdx;
                    const item = submissions[dataIdx];
                    const count = item?.count || 0;
                    return (
                      <motion.div
                        key={`${weekIdx}-${dayIdx}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 + dataIdx * 0.005 }}
                        whileHover={{ scale: 1.2 }}
                        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-xs cursor-pointer transition-all ${getHeatmapColor(count)}`}
                        title={`${item?.date || 'N/A'}: ${count} submissions`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-2 text-xs text-white/50">
              <span>Less</span>
              {[
                "bg-white/5",
                "bg-green-500/30",
                "bg-green-500/60",
                "bg-green-500/90"
              ].map((color, i) => (
                <div key={i} className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-xs ${color}`} />
              ))}
              <span>More</span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
