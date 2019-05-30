var N=null,E="",T="t",U="u",searchIndex={};
var R=["lazycell","Put a value into this cell.","option","Borrows the contents of this lazy cell for the duration of…","fnonce","result","replace","filled","Test whether this cell has been previously filled.","borrow","into_inner","Consumes this `LazyCell`, returning the underlying value.","Returns a copy of the contents of the lazy cell.","borrow_mut","try_from","try_into","formatter","atomiclazycell","LazyCell","AtomicLazyCell"];

searchIndex[R[0]]={"doc":"This crate provides a `LazyCell` struct which acts as a…","i":[[3,R[18],R[0],"A lazily filled `Cell`, with mutable contents.",N,N],[3,R[19],E,"A lazily filled and thread-safe `Cell`, with frozen…",N,N],[11,"new",E,"Creates a new, empty, `LazyCell`.",0,[[],[R[0]]]],[11,"fill",E,R[1],0,[[["self"],[T]],[R[5]]]],[11,R[6],E,R[1],0,[[["self"],[T]],[R[2]]]],[11,R[7],E,R[8],0,[[["self"]],["bool"]]],[11,R[9],E,R[3],0,[[["self"]],[[R[2]],[T]]]],[11,R[13],E,"Borrows the contents of this lazy cell mutably for the…",0,[[["self"]],[[T],[R[2]]]]],[11,"borrow_with",E,R[3],0,[[[R[4]],["self"]],[T]]],[11,"borrow_mut_with",E,"Borrows the contents of this `LazyCell` mutably for the…",0,[[["self"],[R[4]]],[T]]],[11,"try_borrow_with",E,"Same as `borrow_with`, but allows the initializing…",0,[[["self"],["f"]],[[T],[R[5]]]]],[11,"try_borrow_mut_with",E,"Same as `borrow_mut_with`, but allows the initializing…",0,[[["self"],["f"]],[[R[5]],[T]]]],[11,R[10],E,R[11],0,[[],[R[2]]]],[11,"get",E,R[12],0,[[["self"]],[R[2]]]],[18,"NONE",E,"An empty `AtomicLazyCell`.",1,N],[11,"new",E,"Creates a new, empty, `AtomicLazyCell`.",1,[[],[R[17]]]],[11,"fill",E,R[1],1,[[["self"],[T]],[R[5]]]],[11,R[6],E,R[1],1,[[["self"],[T]],[R[2]]]],[11,R[7],E,R[8],1,[[["self"]],["bool"]]],[11,R[9],E,R[3],1,[[["self"]],[[R[2]],[T]]]],[11,R[10],E,R[11],1,[[],[R[2]]]],[11,"get",E,R[12],1,[[["self"]],[R[2]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[14],E,E,0,[[[U]],[R[5]]]],[11,R[15],E,E,0,[[],[R[5]]]],[11,"into",E,E,0,[[],[U]]],[11,R[9],E,E,0,[[["self"]],[T]]],[11,R[13],E,E,0,[[["self"]],[T]]],[11,"type_id",E,E,0,[[["self"]],["typeid"]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[14],E,E,1,[[[U]],[R[5]]]],[11,R[15],E,E,1,[[],[R[5]]]],[11,"into",E,E,1,[[],[U]]],[11,R[9],E,E,1,[[["self"]],[T]]],[11,R[13],E,E,1,[[["self"]],[T]]],[11,"type_id",E,E,1,[[["self"]],["typeid"]]],[11,"fmt",E,E,0,[[["self"],[R[16]]],[R[5]]]],[11,"fmt",E,E,1,[[["self"],[R[16]]],[R[5]]]],[11,"clone",E,"Create a clone of this `LazyCell`",0,[[["self"]],[R[0]]]],[11,"clone",E,"Create a clone of this `AtomicLazyCell`",1,[[["self"]],[R[17]]]],[11,"default",E,E,0,[[],[R[0]]]],[11,"default",E,E,1,[[],[R[17]]]]],"p":[[3,R[18]],[3,R[19]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);