import { useRouter } from "next/router";
import { RWebShare } from "react-web-share";

export default function Share({ text }: any) {
  const router = useRouter();

  return (
    <RWebShare
      data={{
        text: text,
        url: `https://brasil-search.vercel.app${router.asPath}`,
        title: "Brasoç Search",
      }}
      onClick={() => console.info("share successful!")}
    >
      <button className="btn btn-primary shadow">Compartilhar</button>
    </RWebShare>
  );
}
