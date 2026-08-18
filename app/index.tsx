import { Link } from "react-router";
import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rookie Math" },
    { name: "description", content: "I document my experience learning math" },
  ];
}

export default function Home() {
  return <div className="page">
    <h1>About me</h1>
    <p>Hello, my name is Ognjen Antonić and I study IT at the University of Mathematics, Belgrade. There is a small problem though, I'm not really good at math.</p>

    <p>To be clear, I'm not one of those people who 'hate' math and I never really struggled with it, but I was never really passionate about the subject. I found myself just working through a bunch of questions and memorizing the tricks needed to solve them, but I never cared to understand or dive deep. On top of this, after I finished highschool, I took a 5 year long break before starting my studies.</p>

    <p>I'm also really bad at working with abstract concepts so I really struggle with complex ideas and their implications.</p>
    
    <h1>Why?</h1>
    <p>The next logical question is why I would even enroll at this place. I'm a programmer and, like it or not, programming is largely based in math. So many things that we write are based on complex equations that are often abstracted away. Hashing algorithms, graphics rendering, data compression, signal processing just to name a few.</p>

    <p>I could just ignore all of this and probably still have a successful career as a developer, but I'm not the type of person who works with something every day and doesn't take the time to understand it on a deeper level. For me, math is a tool, and like any other tool in a professional setting, you take your time to learn it. After all, it would be comical to hear from a mechanic, "I've never learned the hammer, I'm just not that good at it."</p>

    <h1>About this project</h1>
    <p>As my position is somewhat unique, I saw this as an opportunity to share my experience. The way I learn is by breaking things down into their simplest forms, peeling away abstractions layer by layer until I'm left with just the core idea. Once the core idea is understood, you can add the layers of abstraction back. This builds intuition, and allows me to actually operate with abstractions as a way to pack information inside my mind more densely.</p>

    <p>The main flaw of this method is that it takes a huge amount of time as you're diving into things others simply take for granted and go on about their day. Sometimes, the deeper understanding you gain is practically useless, this is just a handicap I have to compensate for my poor abstract thinking. Also, there are cases where it simply doesn't work. You can't 'deconstruct' vectors (or matrices) and come out with an understanding of eigenvectors. You'll know what they are and how to calculate them, but you won't even know what their point is or what they represent.</p>

    <p>The benefit is that, once you peel away the layers, the remaining concepts are usually so trivial that anyone can understand them. This is what I'll try to document on this project, both for me and for anyone who finds themselves in a similar situation. I'll also document when the process fails, and include any external tools such as analogies and visualizations that are needed to truly understand a concept.</p>

    <p>When reading, please keep in mind that I am a rookie, and I'm just documenting my best effort at genuine understanding. I'll probably be wrong plenty of times, and if you notice a mistake please be kind and <Link to="/suggestions">report it</Link>.</p>

    <h1>Good luck!</h1>
  </div>;
}
