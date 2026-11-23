
import CreatorDirectory from "@/components/CreatorDirectory";
import { fetchCreators } from "@/actions/useractions";

export const metadata = {
  title: "Creators - BrewUp",
};

export default async function CreatorsPage() {
  const creators = await fetchCreators();

  return (
    <CreatorDirectory
      creators={creators}
      title="Our Creators"
      subtitle="Meet the community making amazing things happen."
    />
  );
}
