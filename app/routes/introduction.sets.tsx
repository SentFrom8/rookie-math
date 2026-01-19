import CustomLatex from "~/components/CustomLatex";

const Sets = () => {
  return (
    <div>
      <h1>Sets</h1>
      <p>
        Sets are just collections of unique values. They can contain any number
        of elements from zero to infinity. They can't have a negative number of
        elements as far as I know (I also asked my professor who was in no mood
        to entertain such hypotheticals. This question brought be a bit of
        ridicule from some of my peers). An empty set is denoted with:&nbsp;
        <CustomLatex latex={"\\emptyset"} block={false} />
      </p>

      <p>
        If a set has a certain number of elements, it's called a finite set,
        otherwise it's called infinite. The number of elements in a set is
        called the cardinality, and it's denoted with:&nbsp;
        <CustomLatex latex={"|A|"} block={false} />
      </p>

      <p>Let's take a look at a simple set definition:</p>
      <CustomLatex
        latex={"A = \\{x \\in \\N \\space | \\space 1 < x \\leq 10 \\}"}
      />

      <p>
        This simply tells us that A is a set containing elements (x) from the
        set of natural numbers (<CustomLatex latex={"\\N"} block={false} />)
        where (|) each element is between 1 exclusive and 19 inclusive. We could
        have also listed each element, like so:
      </p>
      <CustomLatex latex={"A = \\{ 2,3,4,5,6,7,8,9,10 \\}"} />
      <p>
        Here are some of the signature sets:
        <ul>
          <li>
            Natural numbers: <CustomLatex latex={"\\N"} block={false} />
          </li>
          <li>
            Whole numbers: <CustomLatex latex={"\\Z"} block={false} />
          </li>
          <li>
            Rational numbers: <CustomLatex latex={"ℚ"} block={false} />
          </li>
          <li>
            Real numbers: <CustomLatex latex={"\\reals"} block={false} />
          </li>
          <li>
            Complex numbers: <CustomLatex latex={"\\Complex"} block={false} />
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Sets;
