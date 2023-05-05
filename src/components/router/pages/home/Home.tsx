import styled from "styled-components"
import mainImage from "/home-images/mainImage.jpg"
import gallery1 from "/home-images/1.jpg"
import gallery2 from "/home-images/2.jpeg"
import gallery3 from "/home-images/3.jpg"
import gallery4 from "/home-images/4.jpg"

const MainImageStyled = styled.img`
    width: 100%;
    margin-bottom: 20px;
`

const VideoGalleryWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`

const VideoText = styled.p`
    margin-bottom: 20px;
`

const VideoStyled = styled.iframe`
    aspect-ratio: 16 / 9;
    width: 100%;
`

const GalleryWrapper = styled.div`
    & img {
        width: 150px;
    }
`

const GalleryPhotos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
`

const MainImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 20px;

    & img {
        margin-right: 12px;
    }
`

export const Home = () => {
    return <>
        <MainImageStyled src={mainImage} />
        <VideoGalleryWrapper>
            <div>
                <VideoText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus ante, fringilla id aliquam quis, ultrices sit amet est. Nulla facilisi. Morbi ac erat accumsan, hendrerit nibh at, elementum augue. Donec eleifend dolor sit amet augue facilisis, vel tempor diam mollis. Donec ut laoreet ipsum. Praesent a pulvinar urna. Nullam egestas lectus a purus cursus, sollicitudin mollis turpis sagittis. Duis placerat nisi quam, nec pretium quam cursus ac. Donec efficitur erat sem, ut ultrices dolor mattis quis. Maecenas condimentum dolor efficitur, tincidunt ipsum in, ultricies diam. Donec in imperdiet risus, facilisis interdum quam.
                </VideoText>
                <VideoStyled src="https://www.youtube.com/embed/bGZplqeIb3w" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></VideoStyled>
            </div>
            <GalleryWrapper>
                <MainImageWrapper>
                    <img src={gallery1} />
                    <span>
                        Aliquam in consectetur libero. Maecenas pulvinar, justo ut euismod consequat, est nibh sodales enim, fringilla hendrerit orci mauris id nibh. Nunc a velit vitae lorem maximus commodo. Vestibulum efficitur ultrices semper. Sed sed commodo velit. Duis non malesuada justo, non fermentum justo.
                    </span>
                </MainImageWrapper>
                <GalleryPhotos>
                    <img src={gallery2} />
                    <img src={gallery3} />
                    <img src={gallery4} />
                </GalleryPhotos>
            </GalleryWrapper>
        </VideoGalleryWrapper>
    </>
}