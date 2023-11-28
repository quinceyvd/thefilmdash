import Heading from '@/components/elements/Heading'
import TitleSlideCanvas from '@/components/TitleSlideCanvas'
import StillsSlideCanvas from '@/components/StillsSlideCanvas'
import ContentSlideCanvas from '@/components/ContentSlideCanvas'

export default function Examples() {
  // Template film objects
  const babylon = {
    // Data for title slide
    title: "BABYLON",
    year: "2023",
    score: 5,
    titleSlideBg: "https://m.media-amazon.com/images/M/MV5BYzJjYmQzM2QtMDIyMy00ZWE2LWI4NzUtNTRlNTZkODE4ODJiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",

    // Data for stills slide
    still1: "https://m.media-amazon.com/images/M/MV5BZDZhNmY0NTAtZGQ0Yi00MWQ5LTg3ODQtODhiMzM0MTVjZDg4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    still2: "https://cdn2.highdefdigest.com/uploads/2023/03/18/babylon-4kultrahd-bluray-review-highdef-digest-6.jpg",
    still3: "https://cdn2.highdefdigest.com/uploads/2023/03/18/babylon-4kultrahd-bluray-review-highdef-digest-8.jpg",

    // Data for content slide
    contentSlideBg: "https://media.vanityfair.com/photos/6310ea0f3f4d30dfa78b489d/4:3/w_1440,h_1080,c_limit/vf-exclusive-babylon-first-look-05.jpg",
    
    // Ideal content slide text length: 707 characters.
    contentSlideText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac tortor dignissim. Maecenas pharetra convallis posuere morbi leo urna molestie at. Congue mauris rhoncus aenean vel elit scelerisque. Sit amet mauris commodo quis. Velit ut tortor pretium viverra suspendisse. Ut aliquam purus sit amet. Arcu ac tortor dignissim convallis aenean et. Lacus viverra vitae congue eu consequat ac felis. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Feugiat nisl pretium fusce id. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Egestas egestas fringilla phasellus faucibus scelerisque.",
  }

  const avatar = {
    title: "AVATAR THE WAY OF WATER",
    year: "2022",
    score: 3.5,
    titleSlideBg: "https://cdn.vox-cdn.com/thumbor/gkxAb98RhpUxwYV3W0Bx3nYngDc=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/5850929/avtr-he-bg-02.0.jpg",
    still1: "https://images2.alphacoders.com/129/thumb-1920-1294470.png",
    still2: "https://images5.alphacoders.com/906/906937.jpg",
    still3: "https://cdn2.highdefdigest.com/uploads/2023/06/15/avatar-the-way-of-water-bluray-james-cameron-review-2.png",
    contentSlideBg: "https://hips.hearstapps.com/vidthumb/images/avatar-the-way-of-water-teaser-trailer-1652105348.jpg?crop=0.735xw:1.00xh;0.174xw,0&resize=1200:*",
    contentSlideText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac tortor dignissim. Maecenas pharetra convallis posuere morbi leo urna molestie at. Congue mauris rhoncus aenean vel elit scelerisque. Sit amet mauris commodo quis. Velit ut tortor pretium viverra suspendisse. Ut aliquam purus sit amet. Arcu ac tortor dignissim convallis aenean et. Lacus viverra vitae congue eu consequat ac felis. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Feugiat nisl pretium fusce id. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Egestas egestas fringilla phasellus faucibus scelerisque.",
  }

  const morbius = {
    title: "MORBIUS",
    year: "2022",
    score: 1.5,
    titleSlideBg: "https://m.media-amazon.com/images/M/MV5BNzZhYThmOTAtMzJkNi00MjQ0LWE0ZWItYzRhZWU5Njc3ZmFkXkEyXkFqcGdeQWpnYW1i._V1_.jpg",
    still1: "https://wallpapercave.com/wp/wp10950333.png",
    still2: "https://3.bp.blogspot.com/--la7WBQfGMk/X9tAiqIdFCI/AAAAAAAAGEU/jkf7FUi9ByYV_AOOF66uaQVQklZJoDmCwCPcBGAsYHg/w919/morbius-movie-vampire-uhdpaper.com-4K-8.2356-wp.thumbnail.jpg",
    still3: "https://images5.alphacoders.com/106/thumb-1920-1063370.jpg",
    contentSlideBg: "https://images4.alphacoders.com/121/1218336.jpg",
    contentSlideText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac tortor dignissim. Maecenas pharetra convallis posuere morbi leo urna molestie at. Congue mauris rhoncus aenean vel elit scelerisque. Sit amet mauris commodo quis. Velit ut tortor pretium viverra suspendisse. Ut aliquam purus sit amet. Arcu ac tortor dignissim convallis aenean et. Lacus viverra vitae congue eu consequat ac felis. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Feugiat nisl pretium fusce id. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Egestas egestas fringilla phasellus faucibus scelerisque.",
  }
  return (
    <main>
      <Heading text="TFD SLIDEPOST TOOL" size={2} />
      <Heading text="Title slides" size={3} />
      <div className='flex flex-row'>
        <TitleSlideCanvas
          title={babylon.title}
          year={babylon.year}
          score={babylon.score}
          imageUrl={babylon.titleSlideBg}
        />
        <TitleSlideCanvas
          title={avatar.title}
          year={avatar.year}
          score={avatar.score}
          imageUrl={avatar.titleSlideBg}
        />
        <TitleSlideCanvas
          title={morbius.title}
          year={morbius.year}
          score={morbius.score}
          imageUrl={morbius.titleSlideBg}
        />
      </div>
      <Heading text="Still slides" size={3} />
      <div className='flex flex-row'>
        <StillsSlideCanvas
          still1={babylon.still1}
          still2={babylon.still2}
          still3={babylon.still3}
        />
        <StillsSlideCanvas
          still1={avatar.still1}
          still2={avatar.still2}
          still3={avatar.still3}
        />
        <StillsSlideCanvas
          still1={morbius.still1}
          still2={morbius.still2}
          still3={morbius.still3}
        />
      </div>
      <Heading text="Content slides" size={3} />
      <div className='flex flex-row mb-[50px]'>
        <ContentSlideCanvas
          contentSlideBg={babylon.contentSlideBg}
          contentSlideText={babylon.contentSlideText}
          title={babylon.title}
          score={babylon.score}
        />
        <ContentSlideCanvas
          contentSlideBg={avatar.contentSlideBg}
          contentSlideText={avatar.contentSlideText}
          title={avatar.title}
          score={avatar.score}
        />
        <ContentSlideCanvas
          contentSlideBg={morbius.contentSlideBg}
          contentSlideText={morbius.contentSlideText}
          title={morbius.title}
          score={morbius.score}
        />
      </div>
    </main>
  )
}