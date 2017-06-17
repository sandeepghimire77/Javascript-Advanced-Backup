/**
 * Created by Akshar on 6/13/2017.
 */
    // an observables isnt a stream. It is a blueprint which describes a set of streams and how they are connected together with
//operations.
var obs= Rx.Observable
    .interval(1000)
        .take(3).map((v) => Date.now());
   // .first(1);
// this interval is an operator.
// in Rxjs land no one can hear you stream, unless you subscribe.
// by calling subscribe onto an observable it turns the observable hot so its starts producing

obs.subscribe(value => console.log("subscriber" +value));
