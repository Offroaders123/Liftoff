# Liftoff

I've been conjuring up this peculiar idea over the last few days, whether it could be a nice idea for a language to flip the use of implicit/explicit handling of async vs sync code. This is the general idea, to help show the concept initially:

| async-await           | liftoff                 |
|-----------------------|-------------------------|
| `new Promise()`       | `liftoff new Promise()` |
| `await new Promise()` | `new Promise()`         |

Here's a bunch of the threads about the concepts for it:

> Related to `await`, I've started thinking of it like a modifier to making something synchronous or not also.
> And it's up to the implementation to provide it's own way of making something async.
> Rather than trying to think of it like it's it's own thing (It is, but not thinking of it like that feels more intutive in a way).

> Are there any languages which do sync-first, rather than async-first?
> By that, I mean, it's a modifier to make the async call go off of the main thread pool, rather than implicitly doing that, an opting-in to 'synchronous'-like behavior, how JS and other languages do it?
> I'm trying to figure out why it's not that way.
> So rather than opting-in to `await`'s behavior, you'd instead opt-in to not waiting for the `Promise`.

So the goal isn't to remove either asynchronous, nor synchronous calls from the language, but rather to flip which one is managed explicitly, and which one is the implicit behavior.

The idea stems from this video I saw a while back.
It's outlook on JS's `async` gave me the idea of that it could be an alternative way of handing sync vs async code paths:

[What Color Is Your Function | Prime Reacts](https://www.youtube.com/watch?v=MoKe4zvtNzA)