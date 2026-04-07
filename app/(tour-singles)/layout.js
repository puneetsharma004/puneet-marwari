import ScrollToTop from "@/components/common/ScrollToTop";
import ScrollTopBehaviour from "@/components/common/ScrollTopBehavier";
import Wrapper from "@/components/layout/Wrapper";



export default function RootLayout({ children }) {
    return (
        <>
            <Wrapper>{children}</Wrapper>
            <ScrollToTop />
            <ScrollTopBehaviour />
        </>
    );
}
