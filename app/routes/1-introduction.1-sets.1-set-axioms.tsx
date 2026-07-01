import CustomLatex from "~/components/CustomLatex";

const SetAxioms = () => {
  return (
    <>
      Let's define sets.
      <ol>
        <li>
          <h2>Axiom of extensionality</h2>
          <p>
            Two sets are equal if they contain the same elements. This one is
            self explanatory, but formally we'd write it as:
          </p>
          <CustomLatex
            latex={
              "\\forall x \\forall y [ \\forall z (z \\in x \\iff z \\in y) \\implies x = y ]"
            }
          />
          <p>
            The '<CustomLatex latex={"\\forall"} block={false} />' symbol simply
            means for all. So we'd read this expression as, "for all sets x and
            y, if for every object z, z is an element of x if and only if z is
            an element of y, then x and y are equal." This symbol '
            <CustomLatex latex={"\\iff"} block={false} />' means if and only if
            (iff for short) and it basically links the two statements, saying
            that if one is true then the other one is also true, and vice versa.
          </p>
        </li>
        <li>
          <h2>Axiom of empty set</h2>
          <p>
            There exists an empty set. This one is also self explanatory, and
            formally we'd write it down as:
          </p>
          <CustomLatex latex={"\\exists A \\forall x (x \\notin A)"} />
          <p>
            This simply reads, "There exists a set A where for every object x, x
            is not in A."
          </p>
        </li>
        <li>
          <h2>Axiom of pairing</h2>
          <p>
            This one is a bit more interesting. It tells us that for any 2 sets
            there exists a set containing them. We write it as:
          </p>
          <CustomLatex
            latex={"\\forall x \\forall y \\exists z ((x \\in z)(y \\in z))"}
          />
          <p>
            So far we knew that there exists an empty set, and that it is unique
            (because of the axiom of extensionality, two empty sets have the
            same elements so they are equal) so we only had 1 set. Now, we can
            pair it, which allows us to do something like&nbsp;
            <CustomLatex latex={"\\{\\emptyset, \\emptyset\\}"} block={false} />
            . We can see that this set and the set&nbsp;
            <CustomLatex latex={"\\{\\emptyset \\}"} block={false} /> have the
            same elements, making them equal. We've successfully constructed our
            first non-empty set. We now have 2 different sets, so we can pair
            them again and get:&nbsp;
            <CustomLatex
              latex={"\\{\\emptyset, \\{\\emptyset \\}\\}"}
              block={false}
            />
            . Repeating this process grants us infinitely many different sets,
            and we now have a way of constructing sets.
          </p>
        </li>
        <li>
          <h2>Axiom of the union</h2>
          <p>
            Given any set X, there is a set Y such that, for any element u, u is
            a member of Y if and only if there is a set z such that u is a
            member of z and z is a member of X.
          </p>
          <CustomLatex
            latex={
              "\\forall X \\exists Y \\forall u (u \\in Y \\iff \\exists z (u \\in z \\land z \\in X))"
            }
          />
          <p>
            This one is confusing, so let's break it down. Simply, it says that
            for any set X there is a set Y that contains all the elements of the
            elements of X. Let's go through it statement by statement, starting
            from the back. u is a member of z and z is a member of X:&nbsp;
            <CustomLatex
              latex={"X = \\{z = \\{ u \\dots \\}, \\dots \\}"}
              block={false}
            />
            . u will be a member of Y only if it follows this exact structure,
            and Y will contain every u that does the same. So for every set X
            that contains sets, there will be a set Y containing elements of
            those sets. We write this as&nbsp;
            <CustomLatex latex={"Y = \\bigcup X"} block={false} />. It's best to
            show this with an example. Say X is a set that contains sets a and
            b.&nbsp;
            <CustomLatex latex={"Y = \\bigcup \\{ a,b \\}"} block={false} /> is
            a set that contains all elements of a and all elements of b, or in
            other words, it's a union of a and b.
          </p>
        </li>
        <li>
          <h2>Axiom of power set</h2>
          <p>
            Given any set x, there is a set y such that, given any set z, this
            set z is a member of y iff every element of z is also an element of
            x.
          </p>
          <CustomLatex
            latex={
              "\\forall x \\exists y \\forall z [z \\in y \\iff \\forall w(w \\in z \\implies w \\in x)]"
            }
          />
          <p>
            A bit of translation is in order. We have a set x. This part should
            be clear. We also have a set y that consists of all sets whose every
            element is in x. This set y is known as the power set and we denote
            it with:&nbsp;
            <CustomLatex latex={"\\mathcal{P}(x)"} block={false} />. Again, an
            example is the best showcase.
          </p>
          <CustomLatex
            latex={
              "A = \\{ a, b, c\\} \\qquad \\mathcal{P}(x) = \\{ \\emptyset, \\{a\\}, \\{b\\}, \\{a, b\\}, \\{c\\}, \\{a, c\\}, \\{b, c\\}, \\{a, b, c\\} \\}"
            }
          />
          <p>
            As we can see, all elements of the power set only contain elements
            of x, and the power set contains every such set.
          </p>
        </li>
        <li>
          <h2>Axiom of separation</h2>
          <p>
            Given any set A, there is a set B (a subset of A) such that, given
            any set x, x is a member of B if and only if x is a member of A and
            φ holds for x.
          </p>
          <CustomLatex
            latex={"B = \\{x \\in A \\space | \\space \\varphi(x)\\}"}
          />
          <p>
            Here, φ is a formula, which in layman terms is a condition that is
            applied to all elements of A, and ones that satisfy the condition
            are included in B. For example, say we have a set A and a set B.
          </p>
          <CustomLatex
            latex={"C = \\{ x \\in A \\space | \\space x \\in B \\}"}
          />
          <p>
            Here,&nbsp;
            <CustomLatex
              latex={"\\varphi(x) := (x \\in B)"}
              block={false}
            />{" "}
            and C will contain all elements of A for which φ applies, giving us
            a union of A and B.
          </p>
        </li>
      </ol>
      <p>
        It's important to note that these are only some of the set axioms which
        were covered as an introduction to the subject and to give a foundation
        for the set operations. The standard set theory (ZFC - Zermelo-Fraenkal
        theory with the axiom of choice) might be covered in more detail in one
        of the later chapters. As to how this solves our previous paradox, it's
        simple. The set&nbsp;
        <CustomLatex latex={"X = \\{X\\}"} block={false} /> can't be constructed
        under these axioms. They don't allow such a structure to exist.
      </p>
    </>
  );
};

export default SetAxioms;
