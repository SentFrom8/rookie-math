import { Link } from "react-router";
import CustomLatex from "~/components/CustomLatex";

const Relations = () => {
  return (
    <div className="page">
      <h1>Relations</h1>
      <p>
        To understand relations, we need to understand what a pair, or an
        n-tuple is. Let's start with the definition:
      </p>
      <CustomLatex latex={"(a, b) := \\{\\{a\\}, \\{a, b\\}\\}"} />
      <p>
        Obviously, a set is unordered. We can't specify which element goes
        first. So we define a structure like this, and we make a rule that the
        element that appears alone goes first. Keep in mind that this set can
        appear in any order:
      </p>
      <CustomLatex latex={"(a, b) := \\{\\{b, a\\}, \\{a\\}\\}"} />
      <p>
        These two are identical, because again the order the set elements appear
        in does not matter, what matters is which one is alone. To be more
        specific, the first element is the one that appears in both sets. This
        also allows us to say <CustomLatex latex="\small (a, b) = (c, d)" block={false} />, and since an ordered pair is a
        set, they are only equal when they have the same elements. We can also
        expand this to multiple elements, for example <CustomLatex latex="\small (a, b, c) = (a, (b, c))" block={false} /> .
        Expanded, this would look like:
      </p>
      <CustomLatex latex={ "(a, b, c) := \\{\\{a\\}, \\{a, (b, c)\\}\\} =" } />
      <CustomLatex latex={"\\{\\{a\\}, \\{a, \\{\\{b\\}, \\{b, c\\}\\}\\}\\}"} />
      <p>
        Quickly, let's also define the cartesian product of two sets. Simply,
        the cartesian product is a set that contains every possible ordered pair
        with the first element from the first set and the second from the
        second set. It's denoted with&nbsp;
        <CustomLatex latex="\small A \times B" block={false} />
        &nbsp;and we can see how it works in the table below:
      </p>
      <table>
          <thead>
             <tr>
              <th>
                <CustomLatex latex={"\\small A \\times B"} block={false} />
              </th>
              <th><CustomLatex latex={"\\small 1"} block={false} /></th>
              <th><CustomLatex latex={"\\small 2"} block={false} /></th>
              <th><CustomLatex latex={"\\small 3"} block={false} /></th>
            </tr>
     
          </thead>
      
          <tbody>
             <tr>
              <th><CustomLatex latex={"\\small a"} block={false} /></th>
              <td><CustomLatex latex={"\\small (1, a)"} block={false} /></td>
              <td><CustomLatex latex={"\\small (2, a)"} block={false} /></td>
              <td><CustomLatex latex={"\\small (3, a)"} block={false} /></td>
            </tr>
            <tr>
              <th><CustomLatex latex={"\\small b"} block={false} /></th>
              <td><CustomLatex latex={"\\small (1, b)"} block={false} /></td>
              <td><CustomLatex latex={"\\small (2, b)"} block={false} /></td>
              <td><CustomLatex latex={"\\small (3, b)"} block={false} /></td>
            </tr>
            <tr>
              <th><CustomLatex latex={"\\small c"} block={false} /></th>
              <td><CustomLatex latex={"\\small (1, c)"} block={false} /></td>
              <td><CustomLatex latex={"\\small (2, c)"} block={false} /></td>
              <td><CustomLatex latex={"\\small (3, c)"} block={false} /></td>
            </tr>
     
          </tbody>
      </table>
      <CustomLatex
        latex={
          "A = \\{1, 2, 3\\} \\qquad B = \\{a, b, c\\}"
        }
      />
      <CustomLatex
        latex={
          `A \\times B = \\begin{Bmatrix}
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
        <CustomLatex latex="\small \{(1, a), (2, b), (3, c)\}" block={false} />.
        That's pretty much all relations are, and now we can discuss special
        relations like&nbsp;
        <Link to={"/pages/1-introduction/2-relations/2-functions"}>functions</Link> or&nbsp;
        <Link to={"/pages/1-introduction/2-relations/1-binary-relations"}>
          binary relations
        </Link>
        .
      </p>
    </div>
  );
};

export default Relations;
