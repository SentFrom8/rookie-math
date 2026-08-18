import CustomLatex from "~/components/CustomLatex";

const Vectors = () => {
  return (
    <div className="page">
      <p>
        In Euclidean geometry, we say that two pairs of points (A, B) and (C, D) are
        equivalent if the midpoints of AD and BC are the same:</p>
      <img src="/rookie-math/vectors_equal.svg" alt="parallel lines of the same length whose diagonals intersect at both midpoints" />

        <p>No matter where we move either one of these lines, AD and BC will always split one another exactly in the middle. This is not always the case:</p>
      <img src="/rookie-math//vectors_different.svg" alt="non-parallel lines whose diagonals are at different spots" />
      <p>Here, we can never get the lines to divide one another evenly into two halves. Hence, we conclude that (A, B) is not equivalent to (B, C). It's important to note that these lines are ordered pairs of points, so (A, B) is 'pointed' towards the right, just like (C, D). If we were comparing (A, B) to (D, C), the lines (A, C) and (B, D) wouldn't intersect in the middle (they wouldn't intersect at all), and these two lines would be different.</p>

      <p>This kind of comparison forms an equivalence relation. It's reflexive (the
        midpoint of AB and AB will obviously be the same point), it's symmetric
        (for lines AB and CD, the intersection of AD and CB will be the
        same if we reverse the order), and it's transitive. The last one is not as
        obvious, but you can draw it and see that it's true.
      </p>
      <p>
        As we talked about earlier, equivalence relations break up a set (in
        this case a set of ordered point pairs) into classes:
      </p>
      <CustomLatex latex="[(A, B)] = \{(X, Y) \mid (X, Y) \backsim (A, B)\}"/>
      <p>
        For example, class AB is a set that contains all ordered pairs of points
        equivalent to AB, ones that, when you draw lines between the opposite
        coordinates, the midpoints meet. This set is called a vector, and that's
        all vectors are. This is why you can draw a vector anywhere in the
        coordinate system and why you usually draw it from the coordinate
        center. As long as they have the same magnitude (length), direction (angle), and
        orientation (point to the same side), they are considered the same.
      </p>

        <p><b>Note</b>: This is just the geometric representation of vectors and does not describe vectors in the broader definition as elements of vector spaces.</p>
    </div>
  );
};

export default Vectors;
