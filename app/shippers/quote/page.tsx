import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function QuotePage() {
  return (
    <div className="container py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Get a Quote</h1>
        <Card>
          <CardHeader>
            <CardTitle>Shipping Details</CardTitle>
            <CardDescription>
              Fill out the form below to get an instant quote for your shipment
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="pickup">Pickup Location</Label>
                <Input id="pickup" placeholder="Enter city or zip code" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="delivery">Delivery Location</Label>
                <Input id="delivery" placeholder="Enter city or zip code" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="freight-type">Freight Type</Label>
              <Select>
                <SelectTrigger id="freight-type">
                  <SelectValue placeholder="Select freight type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ltl">Less Than Truckload (LTL)</SelectItem>
                  <SelectItem value="ftl">Full Truckload (FTL)</SelectItem>
                  <SelectItem value="partial">Partial Truckload</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (lbs)</Label>
                <Input id="weight" type="number" placeholder="Enter weight" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="length">Length (ft)</Label>
                <Input id="length" type="number" placeholder="Enter length" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="width">Width (ft)</Label>
                <Input id="width" type="number" placeholder="Enter width" />
              </div>
            </div>

            <Button className="w-full">Calculate Quote</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}