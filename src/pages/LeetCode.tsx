import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowSquareOut } from "@phosphor-icons/react";

interface UserProfile {
  matchedUser: {
    username: string;
    avatar?: string;
    profile: {
      userAvatar: string;
      realName: string;
      aboutMe: string;
      school: string;
      websites: string[];
      countryName: string;
    };
    submissionCalendar: string; // JSON string of submission calendar
    userCalendar: {
      submissionCalendar: Record<string, number>;
    };
    contestBadges: string;
  };
  userProfileUserLevelTags: Array<{
    tagName: string;
  }>;
}

interface ContestData {
  userContestRanking: {
    rating: number;
    ratingHistory: Array<{
      rating: number;
      month: number;
      year: number;
    }>;
  };
}

export const LeetCode = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [contest, setContest] = useState<ContestData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        // Fetch user profile and stats
        const profileQuery = `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              username
              profile {
                userAvatar
                realName
                aboutMe
                school
                websites
                countryName
              }
              submissionCalendar
              userCalendar {
                submissionCalendar
              }
            }
            userProfileUserLevelTags(username: $username) {
              tagName
            }
          }
        `;

        const profileRes = await fetch("https://leetcode.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Referer": "https://leetcode.com",
          },
          body: JSON.stringify({
            query: profileQuery,
            variables: { username: "oVinayyy" },
          }),
          signal: AbortSignal.timeout(8000),
        });

        if (profileRes.ok) {
          const profileData = await profileRes.json();
          setProfile(profileData.data);
        }

        // Fetch contest ranking
        const contestQuery = `
          query getUserContestRanking($username: String!) {
            userContestRanking(username: $username) {
              rating
              ratingHistory(limit: 6) {
                rating
                month
                year
              }
            }
          }
        `;

        const contestRes = await fetch("https://leetcode.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Referer": "https://leetcode.com",
          },
          body: JSON.stringify({
            query: contestQuery,
            variables: { username: "oVinayyy" },
          }),
          signal: AbortSignal.timeout(8000),
        });

        if (contestRes.ok) {
          const contestData = await contestRes.json();
          setContest(contestData.data);
        }
      } catch (err) {
        console.log("[v0] Error fetching LeetCode data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeData();
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

  if (loading) {
    return (
      <div className="px-2 md:px-4 py-8 flex justify-center items-center">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60 text-sm"
        >
          Loading LeetCode profile...
        </motion.div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="px-2 md:px-4 py-8 text-center">
        <p className="text-white/60 text-sm">Profile unavailable</p>
      </div>
    );
  }

  const matchedUser = profile.matchedUser;
  const submissionCalendar = JSON.parse(matchedUser.userCalendar?.submissionCalendar || "{}");
  const ratingHistory = contest?.userContestRanking?.ratingHistory || [];
  const maxRating = ratingHistory.length > 0 ? Math.max(...ratingHistory.map(r => r.rating)) : 1500;

  // Parse heatmap data
  const heatmapEntries = Object.entries(submissionCalendar)
    .map(([timestamp, count]) => ({ date: new Date(parseInt(timestamp) * 1000), count: count as number }))
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  const getHeatmapColor = (count: number) => {
    if (count === 0) return "bg-slate-700/30 hover:bg-slate-600/40";
    if (count === 1) return "bg-green-600/40 hover:bg-green-500/50";
    if (count <= 3) return "bg-green-500/60 hover:bg-green-500/70";
    return "bg-green-400/80 hover:bg-green-400";
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="px-2 md:px-4 max-w-2xl"
    >
      <div className="flex flex-col gap-6 font-sans text-white">
        {/* LeetCode Heading */}
        <motion.div variants={itemVariants} className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-neutral-200">LeetCode</h2>
        </motion.div>

        {/* Profile Header */}
        <motion.a
          href="https://leetcode.com/oVinayyy"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ x: 4 }}
          className="group flex items-center gap-3 p-3 rounded-lg border border-neutral-700/50 bg-neutral-900/50 hover:bg-neutral-900 transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-sm font-bold text-white">
            {matchedUser.username.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1">
            <div className="text-base font-semibold text-neutral-100">{matchedUser.username}</div>
            <div className="text-xs text-neutral-400">View Profile</div>
          </div>
          <motion.div
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowSquareOut size={16} className="text-yellow-400" />
          </motion.div>
        </motion.a>

        {/* Stats Grid - LeetCode Style */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Total Solved */}
          <div className="rounded-lg p-4 bg-neutral-900/80 border border-neutral-700/50">
            <div className="text-xs text-neutral-400 mb-2 uppercase tracking-wide">Total Solved</div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="text-2xl font-bold text-neutral-100"
            >
              {matchedUser.problemsSolvedBeatsStats?.[0]?.solved || 0}
            </motion.div>
          </div>

          {/* Easy */}
          <div className="rounded-lg p-4 bg-neutral-900/80 border border-green-700/30">
            <div className="text-xs text-green-400 mb-2 uppercase tracking-wide">Easy</div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, type: "spring", stiffness: 100 }}
              className="text-2xl font-bold text-green-400"
            >
              0
            </motion.div>
          </div>

          {/* Medium */}
          <div className="rounded-lg p-4 bg-neutral-900/80 border border-yellow-700/30">
            <div className="text-xs text-yellow-400 mb-2 uppercase tracking-wide">Medium</div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="text-2xl font-bold text-yellow-400"
            >
              0
            </motion.div>
          </div>

          {/* Hard */}
          <div className="rounded-lg p-4 bg-neutral-900/80 border border-red-700/30">
            <div className="text-xs text-red-400 mb-2 uppercase tracking-wide">Hard</div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, type: "spring", stiffness: 100 }}
              className="text-2xl font-bold text-red-400"
            >
              0
            </motion.div>
          </div>
        </motion.div>

        {/* Contest Rating */}
        {contest && (
          <motion.div variants={itemVariants} className="rounded-lg p-4 bg-neutral-900/80 border border-neutral-700/50">
            <div className="mb-4">
              <div className="text-xs text-neutral-400 mb-2 uppercase tracking-wide">Contest Rating</div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="text-3xl font-bold text-yellow-400"
              >
                {contest.userContestRanking?.rating || 0}
              </motion.div>
            </div>

            {/* Rating History Chart */}
            {ratingHistory.length > 0 && (
              <div className="flex items-end gap-1 h-20">
                {ratingHistory.map((point, idx) => (
                  <motion.div
                    key={idx}
                    className="flex-1 flex flex-col items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: `${Math.max((point.rating / maxRating) * 100, 5)}%`, opacity: 1 }}
                      transition={{ delay: 0.5 + idx * 0.05, duration: 0.6 }}
                      className="w-full bg-gradient-to-t from-yellow-500 to-yellow-400 rounded-t-sm"
                      title={`${point.month}/${point.year}: ${point.rating}`}
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* Submission Heatmap */}
        {heatmapEntries.length > 0 && (
          <motion.div variants={itemVariants} className="rounded-lg p-4 bg-neutral-900/80 border border-neutral-700/50">
            <div className="text-xs text-neutral-400 mb-4 uppercase tracking-wide">Submission Calendar</div>

            {/* Heatmap */}
            <div className="flex gap-0.5 overflow-x-auto pb-4">
              {Array.from({ length: 52 }).map((_, weekIdx) => (
                <div key={weekIdx} className="flex flex-col gap-0.5">
                  {Array.from({ length: 7 }).map((_, dayIdx) => {
                    const date = new Date();
                    date.setDate(date.getDate() - (364 - weekIdx * 7 - dayIdx));
                    const timestamp = Math.floor(date.getTime() / 1000);
                    const count = submissionCalendar[timestamp] || 0;

                    return (
                      <motion.div
                        key={`${weekIdx}-${dayIdx}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 + weekIdx * 0.01 }}
                        whileHover={{ scale: 1.2 }}
                        className={`w-2.5 h-2.5 rounded-sm cursor-pointer transition-all ${getHeatmapColor(count)}`}
                        title={`${date.toLocaleDateString()}: ${count} submissions`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <span>Less</span>
              {[
                "bg-slate-700/30",
                "bg-green-600/40",
                "bg-green-500/60",
                "bg-green-400/80"
              ].map((color, i) => (
                <div key={i} className={`w-2.5 h-2.5 rounded-sm ${color}`} />
              ))}
              <span>More</span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
