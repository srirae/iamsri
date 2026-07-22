import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerLabel,
  MarkerPopup,
} from "@/components/ui/map";
import { Button } from "@/components/base/ui/button";
import { Navigation, ExternalLink } from "lucide-react";
import Image from "next/image";

const newark = {
  name: "Newark, NJ",
  label: "Newark",
  image:
    "https://images.unsplash.com/photo-1548625361-1811804e30b6?w=300&h=200&fit=crop",
  lng: -74.1724,
  lat: 40.7357,
};

export function ProfileMap() {
  return (
    <div className="h-[250px] sm:h-full w-full min-h-[250px]">
      <Map center={[newark.lng, newark.lat]} zoom={12}>
        <MapMarker longitude={newark.lng} latitude={newark.lat}>
          <MarkerContent>
            {/* Pulsating green marker */}
            <div className="relative flex size-5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
            </div>
            <MarkerLabel position="bottom">{newark.label}</MarkerLabel>
          </MarkerContent>
          <MarkerPopup className="w-62 p-0">
            <div className="relative h-36 overflow-hidden rounded-t-md">
              <Image
                fill
                src={newark.image}
                alt={newark.name}
                className="object-cover"
              />
            </div>
            <div className="space-y-3 p-3">
              <h3 className="text-foreground text-base leading-tight font-semibold">
                {newark.name}
              </h3>
              <div className="flex gap-2">
                <Button size="sm" className="flex-1">
                  <Navigation className="size-3.5" />
                  Directions
                </Button>
                <Button size="icon" variant="outline">
                  <ExternalLink className="size-3.5" />
                </Button>
              </div>
            </div>
          </MarkerPopup>
        </MapMarker>
      </Map>
    </div>
  );
}
