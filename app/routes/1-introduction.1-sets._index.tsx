import { Link } from "react-router";
import CustomLatex from "~/components/CustomLatex";

const Sets = () => {
  return (
      <>
      <h2>Sets</h2>
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

      <p>
        A set can contain anything. For example, a set of all original thoughts
        you've had is a perfectly valid set. This property can lead to some
        problems. Let's imagine a set that contains other sets. This particular
        set includes all sets that don't contain itself. We can write this as:
        <CustomLatex latex={"S = \\{ x \\space | \\space x \\notin x \\}"} />A
        set that contains itself might be inherently confusing. It sure is for
        me. Let's try to unpack it.
        <CustomLatex latex={"A = \\{ A \\}"} />
        It's a set that contains itself, which means it is a set that contains a
        set that contains itself, which means it is a set that contains a set
        that contains a set that contains itself, and so on.
        <CustomLatex
          latex={"A = \\{ A \\} = \\{\\{A\\}\\} = \\{\\{\\{A\\}\\}\\} = \\dots"}
        />
        Anyway, let's get back to our set S. S contains all sets that are not
        like A. But S itself is not like A, so it has to contain itself? But if
        it does contain itself, then it is like A, and therefore can't contain
        itself? This problem is known as the Russel paradox, and to solve it we
        need to introduce a formal definition of sets.
      </p>
      <h2>Set definition</h2>
      <p>
        What we had until now is the, so called, "naive set theory." We showed
        its flaws, and to eliminate them we need to introduce the&nbsp;
        <Link to={"/introduction/sets/set-axioms"}>set axioms</Link>, which will
        transition us into the axiomatic set theory, and maybe later we'll cover
        the modern, standard form called the Zermelo-Fraenkel set theory.
      </p>
    </>
  );
};

export default Sets;
