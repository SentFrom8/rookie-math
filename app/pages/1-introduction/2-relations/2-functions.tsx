import CustomLatex from "~/components/CustomLatex";

const Functions = () => {
  return (
    <div className="page">
    <h1>Functions</h1>
      <p>
        We can define a function as an ordered triple of 3 sets (A, B, f) where
        A and B are not empty sets, and f is a relation that is a subset
        of&nbsp;
        <CustomLatex latex={"\\small A \\times B"} block={false} />. Often when people
        refer to a function, they are just talking about f and this was a bit
        confusing to me at first. We can also write this as:&nbsp;
        <CustomLatex latex={"\\small f: A \\to B"} block={false} />. A is called the
        domain of the function, and B is called the codomain or the image.
      </p>
      <img
        src="/function.svg"
        alt="The domain and codomain of a function visualized using circles and arrows"
      />
      <p>
        If x is an element of A, the matching element (the one the arrow is
        pointing) is called the image of X. When we write f(1), that just means
        give back the image of 1 so f(1) = a. In other words, f(x) just means
        follow the arrow from x. Now, not every ordered triple forms a function.
        A and B can be any non-empty set, but f has to meet some requirements.
        For example:
      </p>
      <img
        src="/not_function.svg"
        alt="The domain and codomain of a relation that's not a function, because an element from the domain maps to multiple elements of the codomain, and not all elements are mapped"
      />
      <p>
        The above is not a function because it fails the basic rule. Each
        element from the domain must map to one and only one element from the
        codomain. In the example above, what would f(5) be? Also what would f(4)
        be? A set containing c and d? This is not allowed, for something to be a
        function f(x) must return a single value for any x from A.
      </p>
      <p>
        Now that we know what a function has to be, let's take a look into what
        it actually is. If we expand upon our definition, the relation that
        defines our function (the f in (A, B, f)) would look like this:
      </p>
        <CustomLatex
          latex={"f = \\{(1, a), (2, b), (3, b), (4, d), (5, d)\\}"}
        />
      <p>
        Which is clearly a subset of&nbsp;
        <CustomLatex latex={"\\small A \\times B"} block={false} />. The image of a set
        is often denoted as <strong>ImA</strong>.
      </p>
      <p>
        There are certain properties that a function can have. For example, in
        our function above, 4 and 5 map to the same element (d). This doesn't
        have to be the case, and when it isn't we say that the function is
        injective. It's like it 'injects' an element into B for each element of
        A. We'd define an injective function when any two elements have
        different images. Or alternatively, if two elements have the same image,
        they are the same element. Formally, this would look like:
      </p>
      <CustomLatex
        latex={
          "(\\forall x_1, x_2 \\in A)(f(x_1) = f(x_2)) \\implies (x_1 = x_2)"
        }
      />
      <img
        src="/injection.svg"
        alt="An injective function where each element from A points to a different element from B"
      />
      <p>
        As we can see, no two elements from A map to the same B. However, we can
        see that there are elements from B that aren't mapped to anything. This
        was also the case before, and functions allow for this. However, if each
        element from B has a counterpart, the function is called surjective. The
        element of A that maps to some B is called the preimage of B, and the
        preimage of the set B is the domain or A. Formally, the function is
        surjective if:
      </p>
      <CustomLatex
        latex={"(\\forall b \\in B)(\\exists a \\in A) \\space f(a) = b"}
      />
      <img
        src="/surjection.svg"
        alt="A surjective function where each element from B has at least one counterpart from A"
      />
      <p>
        The function above is surjective but not injective (f(4) = f(5)) but we
        can have a function that's both. These are called bijections, and they
        are the 'purest' functions in the sense that you have a 1-1
        bidirectional mapping between the elements. Bidirectional is important
        here, because bijective functions have inverses. This means that in the
        same way that you're mapping elements from A to B, you can map elements
        from B to A and you'll still have a function. If the function was just
        injective, you could have an element from B that nothing maps to (like
        'e' in the earlier examples) and if it was just surjective two elements
        from A could map to one element from B and the inverse wouldn't work
        (like 'd' in earlier examples).
      </p>
      <img
        src="/bijection.svg"
        alt="A bijective function where each element from A maps to one element from B and every element of B is mapped"
      />
      <p>
        It's important to note that a function can only be bijective if the
        domain and codomain have the same cardinality. The inverse function is
        denoted with&nbsp;
        <CustomLatex latex={"\\small f^\{-1\}(x)"} block={false} /> and it looks like
        this:
      </p>
      <img
        src="/inverse.svg"
        alt="An inverse function that maps each element of B to an element of A"
      />
      <p>
        As we can see, the inverse function is also bijective, the domain is B
        (codomain of f) and the codomain is A (the domain of f). In this
        context, x is an element of B and&nbsp;
        <CustomLatex latex={"\\small f^\{-1\}(x)"} block={false} /> returns an element
        from A that the arrow points to.
      </p>
      <p>
        We can also have multiple mappings between sets. Say we have a set A, B
        and C. We could have a function&nbsp;
        <CustomLatex latex={"\\small f : A \\to B"} block={false} /> and a
        function&nbsp;
        <CustomLatex latex={"\\small g: B \\to C"} block={false} />. Since elements from
        A point to B and elements from B point to C, we could follow the arrows
        and create a mapping from A to C directly. This is known as a function
        composition and we write it down as:
      </p>
      <CustomLatex latex={"g \\circ f : A \\to C"} />
      <p>
        The notation is quite confusing, but the above means g(f(x)) where x is
        an element from A. So we first get the image of x from B and we pass
        that image to g to get the element from C.
      </p>
      <img
        src="/composite.svg"
        alt="A composite function with arrows drawn from the elements of set A to B and another set of arrows from B to C"
      />
      <p>
        The first question is, will this always be a function? If we think about
        it, each element from A must map to one element from B. Each element
        from B must map to one element from C. That means, there will be a
        mapping to an element of C for every element in B and that, of course,
        includes the ones mapped to by A. Could it happen that an element from A
        maps to multiple elements in C? This would only happen if the element
        maps to multiple elements of B, or if the element from B maps to
        multiple elements from C. So we can safely conclude that the composition
        of two functions will always itself be a function.
      </p>
    </div>
  );
};

export default Functions;
