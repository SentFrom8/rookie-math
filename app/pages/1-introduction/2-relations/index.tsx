import { Link } from "react-router";
import CustomLatex from "~/components/CustomLatex";

const Relations = () => {
  return (
    <div className="page flex flex-col gap-4 py-3">
      <h1>Relations</h1>
      <p>
        To understand relations, we need to understand what a pair, or an
        n-tuple is. Let's start with the definition:
      </p>
      <CustomLatex latex={"\\large (a, b) := \\{\\{a\\}, \\{a, b\\}\\}"} />
      <p>
        Obviously, a set is unordered. We can't specify which element goes
        first. So we define a structure like this, and we make a rule that the
        element that appears alone goes first. Keep in mind that this set can
        appear in any order:
      </p>
      <CustomLatex latex={"\\large (a, b) := \\{\\{b, a\\}, \\{a\\}\\}"} />
      <p>
        These two are identical, because again the order the set elements appear
        in does not matter, what matters is which one is alone. To be more
        specific, the first element is the one that appears in every set. This
        also allows us to say (a, b) = (c, d), and since an ordered pair is a
        set, they are only equal when they have the same elements. We can also
        expand this to multiple elements, for example (a, b, c) = (a, (b, c)).
        Expanded, this would look like:
      </p>
      <CustomLatex
        latex={ "\\large (a, b, c) := \\{\\{a\\}, \\{a, (b, c)\\}\\} =" } />
      <CustomLatex latex={"\\large \\{\\{a\\}, \\{a, \\{\\{b\\}, \\{b, c\\}\\}\\}\\}"} />
      <p>
        Quickly, let's also define the cartesian product of two sets. Simply,
        the cartesian product is a set that contains every possible ordered pair
        with the first element from the first set and the second from the
        second. It's denoted with&nbsp;
        <CustomLatex latex={"A\\times B"} block={false} />
        and we can see how it works in the table below:
      </p>
      <table>
          <thead>
             <tr>
              <th>
                <CustomLatex latex={"\\small A \\times B"} block={false} />
              </th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
            </tr>
     
          </thead>
      
          <tbody>
             <tr>
              <th>a</th>
              <td>(1, a)</td>
              <td>(2, a)</td>
              <td>(3, a)</td>
            </tr>
            <tr>
              <th>b</th>
              <td>(1, b)</td>
              <td>(2, b)</td>
              <td>(3, b)</td>
            </tr>
            <tr>
              <th>c</th>
              <td>(1, c)</td>
              <td>(2, c)</td>
              <td>(3, c)</td>
            </tr>
     
          </tbody>
      </table>
      <CustomLatex
        latex={
          "\\large A = \\{1, 2, 3\\} \\qquad B = \\{a, b, c\\}"
        }
      />
      <CustomLatex
        latex={
          `\\large A \\times B = \\begin{Bmatrix}
            (1, a) & (1, b) & (1, c) \\\\ 
            (2, a) & (2, b) & (2, c) \\\\ 
            (3, a) & (3, b) & (3, c)
          \\end{Bmatrix}`
        }
      />
      <p>
        Finally, we can explain what relations are. They are just subsets of the
        cartesian product of some sets following some rule. This, of course,
        means they are sets themselves. One relation would be&nbsp;
        <CustomLatex latex={"\\{(1, a), (2, b), (3, c)\\}"} block={false} />.
        That's pretty much all relations are, and now we can discuss special
        relations like&nbsp;
        <Link to={"/introduction/relations/functions"}>functions</Link> or&nbsp;
        <Link to={"/introduction/relations/binary-relations"}>
          binary relations
        </Link>
        .
      </p>
    </div>
  );
};

export default Relations;
