use redux_bundler_rs::State;

pub enum Action {
    Increment(isize),
    Decrement(isize),
    Reset,
}

pub struct CounterState {
    pub count: isize,
}

impl State for CounterState {
    type Action = Action;

    fn apply(&mut self, action: &Self::Action) {
        match action {
            Action::Increment(amount) => self.count += amount,
            Action::Decrement(amount) => self.count -= amount,
            Action::Reset => self.count = 0,
        }
    }
}

pub fn select_count(state: &CounterState) -> isize {
    state.count
}

pub fn react_needs_reset(state: &CounterState) -> Option<Action> {
    let count = select_count(state);

    if count >= 10 {
        return Some(Action::Reset);
    } else {
        return None;
    }
}

