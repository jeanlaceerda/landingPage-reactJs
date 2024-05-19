import WithSpeechBubbles from "../../components/content/comments-users"
import CaptionCarousel from "../../components/content/courses-list"
import IntroductionText from "../../components/content/introduction-text/introduction-text"
import SplitWithImage from "../../components/content/primary-section/featurePicture"
import LargeWithAppLinksAndSocial from "../../components/footer"
import WithSubnavigation from "../../components/header"



export const LandingPage = () => (

    <>
        <WithSubnavigation />
        <SplitWithImage />
        <IntroductionText />
        <CaptionCarousel />
        <WithSpeechBubbles />
        <LargeWithAppLinksAndSocial />
    </>
)
