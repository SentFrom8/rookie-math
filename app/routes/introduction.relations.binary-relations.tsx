import CustomLatex from "~/components/CustomLatex";

const BinaryRelations = () => {
  return (
    <main>
      <h1>Binary relations</h1>
      <p>
        Binary relations are ones that are the subset of the cartesian product
        of a set by itself.&nbsp;
        <CustomLatex latex={"A^2 = A \\times A"} block={false} />. If a and b
        are both elements of A and they are related to each other (the relation
        contains the element (a, b)) we can write that as a ρ b. Let's take the
        set&nbsp;
        <CustomLatex latex={"A = \\{a, b, c, d, e\\}"} block={false} />. If we
        want to define or examine a binary relation on this set, we can do it
        easily using a table, like so:
      </p>
      <table>
        <tr>
          <th>A</th>
          <th>a</th>
          <th>b</th>
          <th>c</th>
          <th>d</th>
          <th>e</th>
        </tr>
        <tr>
          <th>a</th>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <th>b</th>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <th>c</th>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <th>d</th>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
        </tr>
        <tr>
          <th>e</th>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
        </tr>
      </table>
      <p>
        The table represents each combination of 2 elements from A. 1 means that
        that combination appears in the relation, 0 means that it does not. So
        the relation described in this table would look like:
      </p>
      <CustomLatex
        latex={"\\rho = \\{(a, a), (b, b), (c, c), (d, d), (e, e)\\}"}
      />
      <p>
        Each element of A×A corresponds to either a 1 or a 0. In other words,
        there is a mapping of each element from A×A to an element from a set
        that contains 1 and 0. This is actually a function, and it's knows as
        the characteristic function&nbsp;
        <CustomLatex
          latex={"f_\{\\rho\} : A \\times A \\to \\{0, 1\\}"}
          block={false}
        />
        . We can pass any element of A×A to this function and it will return 1
        if it's inside the relation, so&nbsp;
        <CustomLatex latex={"f_\{\\rho\}((d, d)) = 1"} block={false} />. The
        table above also allows us to see the matrix property of a binary
        relation and we can clearly see why the collection of pairs with the
        same elements is known as the diagonal.
      </p>
      <h2>Properties of binary relations</h2>
      <p>
        We can describe any binary relation ρ of a set A using these properties:
      </p>
      <dl>
        <dt>Reflexivity (r)</dt>
        <dd>Does the relation contain the entire diagonal?</dd>
        <dt>Antireflexivity (ar)</dt>
        <dd>Does the relation contain zero elements from the diagonal?</dd>
        <dt>Symmetry (s)</dt>
        <dd>
          Does it contain the element on the opposite side of the diagonal for
          each element?
        </dd>
        <dt>Antisymmetri (as)</dt>
        <dd>
          Does it contain zero elements that are on the opposite side of the
          diagonal for any of the elements?
        </dd>
        <dt>Transitivity (t)</dt>
        <dd>If it contains (a, b) and (b, c), does it also contain (a, c)?</dd>
      </dl>
      <h3>Reflexivity</h3>
      <p>
        This is the simplest one. Does the relation contain every element in the
        format (x, x)? The collection of all elements in this format is known as
        the diagonal, and we can formally write this as:
      </p>
      <CustomLatex latex={"(\\forall a \\in A)(a, a) \\in \\rho"} />
      <h3>Antireflexivity</h3>
      <p>
        This one is also fairly simple, the relation is antireflexive if it
        doesn't contain any elements from the diagonal. Formally we write it
        down as:
      </p>
      <CustomLatex latex={"(\\forall a \\in A)(a, a) \\notin \\rho"} />
      <h3>Symmetry</h3>
      <p>
        This is where things start to get a bit confusing. It states that for
        each element, the element on the opposite side of the diagonal must also
        be included. In other words, if (a, b) is an element, (b, a) is also an
        element. Or formally:
      </p>
      <CustomLatex latex={"(a, b) \\in \\rho \\implies (b, a) \\in \\rho"} />
      <p>Here is an example of one such relation:</p>
      <table>
        <tr>
          <th>A</th>
          <th>a</th>
          <th>b</th>
          <th>c</th>
          <th>d</th>
          <th>e</th>
        </tr>
        <tr>
          <th>a</th>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <th>b</th>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
        </tr>
        <tr>
          <th>c</th>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
        </tr>
        <tr>
          <th>d</th>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
        </tr>
        <tr>
          <th>e</th>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
        </tr>
      </table>
      <p>
        We can clearly see why it's called symmetry, if we were to fold this
        over the diagonal, the ones and zeroes would perfectly match. An element
        of the diagonal, if included, is symmetric by default (because the
        element on the opposite side of the diagonal is itself, which is
        included) so the diagonal has no impact on symmetry.
      </p>
      <h3>Antisymmetry</h3>
      <p>
        This one states that if (a, b) is an element of ρ, then (b, a) must not
        be, <strong>unless</strong> they are the same element. So again, we're
        ignoring the diagonal. When folded over the diagonal, two ones can't
        overlap (it's fine if zeroes do). Formally:
      </p>
      <CustomLatex
        latex={
          "(a, b) \\in \\rho \\space \\text\{and\} \\space (b, a) \\in \\rho \\implies a = b"
        }
      />
      <h3>Transitivity</h3>
      <p>
        I find this one hardest to visualize because it doesn't quite translate
        to our table. It states that if (a, b) in ρ, and (b, c) in ρ, then (a,
        c) is also in ρ:
      </p>
      <CustomLatex
        latex={"(a, b), (b, c) \\in \\rho \\implies (a, c) \\in \\rho"}
      />
      <p>Let's try to see this in the table:</p>
      <table>
        <tr>
          <th>A</th>
          <th>a</th>
          <th>b</th>
          <th>c</th>
          <th>d</th>
          <th>e</th>
        </tr>
        <tr>
          <th>a</th>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
        </tr>
        <tr>
          <th>b</th>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
        </tr>
        <tr>
          <th>c</th>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <th>d</th>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <th>e</th>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </table>
      <p>
        If we were to draw a horizontal line through (a, b) in the grid, and a
        vertical one through (b, c), there must be 1 on the intersection.
      </p>
    </main>
  );
};

export default BinaryRelations;
