rootMargin can be useful for our case since it gives us a way to define a margin that the observer will use to look for intersections. By default, it's 0, meaning the observer will trigger the intersect event as soon as it enters the viewport. But setting a rootMargin of 400px means that the intersect callback will trigger exactly 400px before the element enters the viewport.


Note: we're using array destructuring on the *[entry]* argument. That's a shorthand way equivalent to getting the entries array and access the first element as *entries[0]*.

As you can see, we're using this.$el which is the root element of the component as its observable DOM Element.