import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Medal, Star, ArrowUp, ArrowDown, Minus, Filter } from "lucide-react"

export default function LeaderboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Leaderboard</h1>
        <p className="text-muted-foreground">Track your progress and compete with peers</p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="grid grid-cols-3 gap-4">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <div className="rounded-full bg-primary/10 p-2 mb-2">
                <Trophy className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-medium">Your Rank</p>
              <p className="text-2xl font-bold">12th</p>
              <p className="text-xs text-muted-foreground">Top 5%</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <div className="rounded-full bg-primary/10 p-2 mb-2">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-medium">Points</p>
              <p className="text-2xl font-bold">1,245</p>
              <p className="text-xs text-muted-foreground">+85 this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <div className="rounded-full bg-primary/10 p-2 mb-2">
                <Medal className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-medium">Badges</p>
              <p className="text-2xl font-bold">7</p>
              <p className="text-xs text-muted-foreground">2 new</p>
            </CardContent>
          </Card>
        </div>
        <Button variant="outline" size="sm" className="gap-2 self-end sm:self-auto">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      <Tabs defaultValue="global" className="space-y-4">
        <TabsList>
          <TabsTrigger value="global">Global</TabsTrigger>
          <TabsTrigger value="institution">Institution</TabsTrigger>
          <TabsTrigger value="course">Course</TabsTrigger>
          <TabsTrigger value="friends">Friends</TabsTrigger>
        </TabsList>
        <TabsContent value="global" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Global Rankings</CardTitle>
              <CardDescription>Top performers across all institutions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="rounded-md bg-primary/5 border border-primary/20 p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 font-bold">1</div>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user" />
                      <AvatarFallback>EW</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Emma Wilson</p>
                      <p className="text-xs text-muted-foreground">Stanford University</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                      Physics Champion
                    </Badge>
                    <div className="text-right">
                      <p className="font-bold">2,845</p>
                      <div className="flex items-center text-xs text-green-600">
                        <ArrowUp className="h-3 w-3 mr-1" />
                        <span>+125</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-md p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 font-bold">2</div>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user" />
                      <AvatarFallback>JC</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">James Chen</p>
                      <p className="text-xs text-muted-foreground">MIT</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                      Data Science Expert
                    </Badge>
                    <div className="text-right">
                      <p className="font-bold">2,712</p>
                      <div className="flex items-center text-xs text-green-600">
                        <ArrowUp className="h-3 w-3 mr-1" />
                        <span>+98</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-md p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 font-bold">3</div>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user" />
                      <AvatarFallback>SP</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Sophia Patel</p>
                      <p className="text-xs text-muted-foreground">Cambridge University</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                      Chemistry Wizard
                    </Badge>
                    <div className="text-right">
                      <p className="font-bold">2,590</p>
                      <div className="flex items-center text-xs text-red-600">
                        <ArrowDown className="h-3 w-3 mr-1" />
                        <span>-42</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-md p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 font-bold">4</div>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user" />
                      <AvatarFallback>MR</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Miguel Rodriguez</p>
                      <p className="text-xs text-muted-foreground">UC Berkeley</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">Biology Master</Badge>
                    <div className="text-right">
                      <p className="font-bold">2,487</p>
                      <div className="flex items-center text-xs text-green-600">
                        <ArrowUp className="h-3 w-3 mr-1" />
                        <span>+65</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-md p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 font-bold">5</div>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user" />
                      <AvatarFallback>AK</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Aisha Khan</p>
                      <p className="text-xs text-muted-foreground">Oxford University</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                      Quantum Computing Pro
                    </Badge>
                    <div className="text-right">
                      <p className="font-bold">2,356</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Minus className="h-3 w-3 mr-1" />
                        <span>0</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-md border border-dashed p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 font-bold">12</div>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">Your University</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">Rising Star</Badge>
                    <div className="text-right">
                      <p className="font-bold">1,245</p>
                      <div className="flex items-center text-xs text-green-600">
                        <ArrowUp className="h-3 w-3 mr-1" />
                        <span>+85</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="institution" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Institution Rankings</CardTitle>
              <CardDescription>Top performers at your institution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="rounded-md p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 font-bold">1</div>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user" />
                      <AvatarFallback>LT</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Lisa Thompson</p>
                      <p className="text-xs text-muted-foreground">Computer Science</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">AI Specialist</Badge>
                    <div className="text-right">
                      <p className="font-bold">1,876</p>
                      <div className="flex items-center text-xs text-green-600">
                        <ArrowUp className="h-3 w-3 mr-1" />
                        <span>+45</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-md p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 font-bold">2</div>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user" />
                      <AvatarFallback>RJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Ryan Johnson</p>
                      <p className="text-xs text-muted-foreground">Physics</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">Lab Expert</Badge>
                    <div className="text-right">
                      <p className="font-bold">1,654</p>
                      <div className="flex items-center text-xs text-red-600">
                        <ArrowDown className="h-3 w-3 mr-1" />
                        <span>-12</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-md border border-dashed p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 font-bold">3</div>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">Computer Science</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">Rising Star</Badge>
                    <div className="text-right">
                      <p className="font-bold">1,245</p>
                      <div className="flex items-center text-xs text-green-600">
                        <ArrowUp className="h-3 w-3 mr-1" />
                        <span>+85</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

