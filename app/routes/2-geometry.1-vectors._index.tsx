import CustomLatex from "~/components/CustomLatex.tsx"

const Vectors = () => {
  return (
    <>
      <p>
        In Euclidean geometry, we say that two pairs of points AB, CD are
        equivalent if the midpoints of AD, BC are the same. This is clear from
        the image below. This is an equivalence relation, it's reflexive (The
        midpoint of AB and BA will obviously be the same point), it's symmetric
        (For points AB, CD, the intersection of AD, CB will obviously be the
        same if we reverse the order) and it's transitive. The last one is not as
        obvious but you can draw it and see that it's true.
      </p>
      <img src="" alt="" />
      <p>
        As we talked about earlier, equivalence relations break up a set (in
        this case a set of ordered point pairs) into classes:
      </p>
      <CustomLatex latex=""/>
      <p>
        For example, class AB is a set that contains all ordered pairs of points
        equivalent to AB, ones that when you draw lines between the opposite
        coordinates the midpoints meet. This set is called a vector, and that's
        all vectors are. This is why you can draw a vector anywhere in the
        coordinate system and why you usually draw it from the coordinate
        center. As long as they have the same magnitude, direction and
        orientation, they are considered the same. Magnitude is just the length,
        direction is the line that the vector lies on and the orientation
        specifies which end of that line it's pointing towards.
      </p>
    </>
  );
};

export default Vectors;
