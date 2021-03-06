import Link from "../elements/Link";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
        voluptatibus aperiam, similique ipsam dicta perspiciatis blanditiis
        voluptatem veritatis assumenda, ea ratione quaerat, aspernatur vero
        veniam illum. Commodi et pariatur sit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolorum totam fugit, illo id, accusantium
        vero maxime culpa velit, qui iure rerum quasi sapiente consequatur
        repudiandae nihil recusandae. Quo, tempore quos. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Vitae architecto consectetur unde in
        molestiae dolorem. Earum, voluptatum totam. Ipsum odit officiis sint, at
        impedit omnis laboriosam unde delectus cum ad.
      </p>
      <Video autoPlay loop muted playsInline>
        <source
          src={
            "https://neuefische.cdn.prismic.io/neuefische/a5cd0a4b-033f-4800-91a4-1a3d02efe3af_sascha_rissling_fiddle.mp4"
          }
          type="video/mp4"
        />
      </Video>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
        voluptatibus aperiam, similique ipsam dicta perspiciatis blanditiis
        voluptatem veritatis assumenda, ea ratione quaerat, aspernatur vero
        veniam illum. Commodi et pariatur sit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolorum totam fugit, illo id, accusantium
        vero maxime culpa velit, qui iure rerum quasi sapiente consequatur
        repudiandae nihil recusandae. Quo, tempore quos. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Vitae architecto consectetur unde in
        molestiae dolorem. Earum, voluptatum totam. Ipsum odit officiis sint, at
        impedit omnis laboriosam unde delectus cum ad.
      </p>
      <Image src="https://images.unsplash.com/photo-1598184274542-0281b027de9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80" />
      <Image src="https://images.unsplash.com/photo-1593642703055-4b72c180d9b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
      <Image src="https://images.unsplash.com/photo-1598226260596-b0e7f09abf73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80" />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
        voluptatibus aperiam, similique ipsam dicta perspiciatis blanditiis
        voluptatem veritatis assumenda, ea ratione quaerat, aspernatur vero
        veniam illum. Commodi et pariatur sit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolorum totam fugit, illo id, accusantium
        vero maxime culpa velit, qui iure rerum quasi sapiente consequatur
        repudiandae nihil recusandae. Quo, tempore quos. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Vitae architecto consectetur unde in
        molestiae dolorem. Earum, voluptatum totam. Ipsum odit officiis sint, at
        impedit omnis laboriosam unde delectus cum ad.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
        voluptatibus aperiam, similique ipsam dicta perspiciatis blanditiis
        voluptatem veritatis assumenda, ea ratione quaerat, aspernatur vero
        veniam illum. Commodi et pariatur sit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolorum totam fugit, illo id, accusantium
        vero maxime culpa velit, qui iure rerum quasi sapiente consequatur
        repudiandae nihil recusandae. Quo, tempore quos. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Vitae architecto consectetur unde in
        molestiae dolorem. Earum, voluptatum totam. Ipsum odit officiis sint, at
        impedit omnis laboriosam unde delectus cum ad.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
        voluptatibus aperiam, similique ipsam dicta perspiciatis blanditiis
        voluptatem veritatis assumenda, ea ratione quaerat, aspernatur vero
        veniam illum. Commodi et pariatur sit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolorum totam fugit, illo id, accusantium
        vero maxime culpa velit, qui iure rerum quasi sapiente consequatur
        repudiandae nihil recusandae. Quo, tempore quos. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Vitae architecto consectetur unde in
        molestiae dolorem. Earum, voluptatum totam. Ipsum odit officiis sint, at
        impedit omnis laboriosam unde delectus cum ad.
      </p>
      <Link href="/team">Team</Link>
    </div>
  );
}

const Video = styled.video`
  width: 100%;
  height: 50vh;
  object-fit: cover;
  object-position: top center;
`;

const Image = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
  object-position: center center;
`;
