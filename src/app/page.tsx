import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <Card className="max-w-3xl ">
      <CardHeader>
        <CardTitle className=" font-mono  text-5xl">Project Overview</CardTitle>
        <CardDescription className="font-heading">
          Track progress and recent activity for your Next.js app.
        </CardDescription>
      </CardHeader>
      <CardContent className="font-mono">
        Your design system is ready. Start building your next component.
      </CardContent>
    </Card>
  )
}