Post Base Reward (Pr)--------->25
Comment Base Reward(Cr) ------>3
Vote Base Reward(Vr)---------->1

Top---------->Time of Posting
Toa---------->Time of Action


time(hrs)                    Comment Reward(Cr)            Vote Reward(Vr)        Blocks
----------------------------------------------------------------------------------------------------
Toa <= Top+3                   Cr x 8                      Vr x 8             Toa<= Top + 720
Top+3 <Toa <= Top+9            Cr x 5                      Vr x 5             Top+720 <Toa<= Top+2160
Top+9<Toa <= Top+18            Cr x 3                      Vr x 3             Top+2160 <Toa<= To+4320
Top+18<Toa <= Top+24           Cr x 2                      Vr x 2             Top+4320 <Toa<= To+5760
Top>24                         Cr                          Vr                 Toa > Top+5760


User Post Score------------>UPScore +
User Comment Score--------->UCScore
User Vote Score------------>UVScore
                          ----------
User Total Score----------->UTScore*

*Every 24 hours(5760 blocks), all users' scores reset to zero.

User1.UTScore + User2.UTscore + ....+Usern.UTscore = CUTScore ------------>Cumulative UTscore

NumberOfPearlsInPool / UTScore = ScoreValueInPearl

ScoreValueInPearl x User.UTScore = UserTotalRewardsInADay

*Every 24 hours(5760 blocks), all users' scores reset to zero.