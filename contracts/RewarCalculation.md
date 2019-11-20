Post Base Reward (Pr)--------->10
Comment Base Reward(Cr) ------>3
Vote Base Reward(Vr)---------->1

Top---------->Time of Posting
Toa---------->Time of Action


time(hrs)                    Comment Reward(Cr)            Vote Reward(Vr)        Blocks
----------------------------------------------------------------------------------------------------
Toa <= Top+3                   Cr x 3                      Vr x 3             Toa<= Top + 720
Top+3 <Toa <= Top+9            Cr x 2                      Vr x 2             Top+720 <Toa<= Top+2160
Top+9<Toa <= Top+18            Cr x 1.5                    Vr x 1.5           Top+2160 <Toa<= To+4320
Top+18<Toa <= Top+24           Cr x 1.25                   Vr x 1.25          Top+4320 <Toa<= To+5760
Top>24                         Cr                          Vr                 Toa > Top+5760


User Post Score------------>UPScore +
User Comment Score--------->UCScore
User Vote Score------------>UVScore
                          ----------
User Total Score----------->UTScore

User1.UTScore + User2.UTscore + ....+Usern.UTscore = CUTScore ------------>Cumulative UTscore

NumberOfPearlsInPool / UTScore = ScoreValueInPearl

ScoreValueInPearl x User.UTScore = UserTotalRewardsInADay
