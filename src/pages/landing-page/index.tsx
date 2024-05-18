import WithSpeechBubbles from "../../components/content/comments-users.tsx"
import CaptionCarousel from "../../components/content/courses-list.tsx"
import LargeWithAppLinksAndSocial from "../../components/footer"
import WithSubnavigation from "../../components/header"



export const LandingPage = () => (

    <>
        <WithSubnavigation />
        <CaptionCarousel />
        <WithSpeechBubbles />
        <LargeWithAppLinksAndSocial />
    </>
)
