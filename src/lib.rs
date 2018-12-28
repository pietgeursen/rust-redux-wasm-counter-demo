extern crate cfg_if;
extern crate js_sys;
extern crate redux_bundler_rs;
extern crate wasm_bindgen;

mod utils;
mod store;

use store::*;
use redux_bundler_rs::{Bundle, Subscriber, Redux};

use cfg_if::cfg_if;
use wasm_bindgen::prelude::*;


cfg_if! {
    // When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
    // allocator.
    if #[cfg(feature = "wee_alloc")] {
        extern crate wee_alloc;
        #[global_allocator]
        static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
    }
}

#[wasm_bindgen]
pub struct WrappedBundle {
    bundle: Bundle<CounterState>,
}

#[wasm_bindgen]
impl WrappedBundle {
    #[wasm_bindgen(constructor)]
    pub fn new() -> WrappedBundle {
        let initial_state = CounterState { count: 0 };

        let bundle = Bundle {
            state: initial_state,
            reactors: vec![react_needs_reset],
            subscribers: vec![],
        };

        WrappedBundle { bundle }
    }

    pub fn get_state(&self) -> isize {
        self.bundle.state.count
    }

    pub fn increment(&mut self) {
        self.bundle.dispatch(&Action::Increment(1));
    }
    pub fn decrement(&mut self) {
        self.bundle.dispatch(&Action::Decrement(1));
    }

    pub fn subscribe(&mut self, cb: js_sys::Function) {
        let subscriber: Subscriber<CounterState> = Box::new(move |state: &CounterState| {
            let this = JsValue::NULL;
            let val = JsValue::from_f64(state.count as f64);
            cb.call1(&this, &val).expect("Calling back subscribed function failed");
        });

        self.bundle.subscribe(subscriber);
    }
}
