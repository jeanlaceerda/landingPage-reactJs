import WithSpeechBubbles from "../../components/content/comments-users"
import CaptionCarousel from "../../components/content/courses-list"
import IntroductionText from "../../components/content/introduction-text/introduction-text"
import LargeWithAppLinksAndSocial from "../../components/footer"
import WithSubnavigation from "../../components/header"



export const LandingPage = () => (

    <>
        <WithSubnavigation />
        <IntroductionText />
        <CaptionCarousel />
        <WithSpeechBubbles />
        <LargeWithAppLinksAndSocial />
    </>
)
