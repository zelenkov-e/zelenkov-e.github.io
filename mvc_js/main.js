class Model {
  constructor() {
    const elemlist = {
      x: [],
      y: [],
    };
  }

  addList(x, y) {
    const item = {
      x: x,
      y: y,
    };

    this.elemlist.x.push(x);
    this.elemlist.y.push(y);
  }
}

class View {
  constructor() {
    this.app = this.getElement('#root');
    this.title = this.createElement('h1', 'title');
    this.title.textContent = 'set data';

    //------dataSet View form--------------//
    this.form = this.createElement('form', 'elemForm');
    this.inputX = this.createElement('input', 'inputX');
    this.inputY = this.createElement('input', 'inputY');

    this.inputX.type = 'text';
    this.inputY.type = 'text';

    this.inputX.placeholder = 'set X';
    this.inputY.placeholder = 'set Y';

    this.submitButton = this.createElement('button', 'submitButton');
    this.submitButton.textContent = 'add';

    this.list = this.createElement('div', 'wrapperTable');
    // Append the input and submit button to the form
    this.form.append(this.inputX, this.inputY, this.submitButton);
    // Append  form
    this.app.append(this.title, this.form, this.list);

    //     this.list.textContent =
  }

  createElement(tag, className) {
    const element = document.createElement(tag);

    if (className) element.classList.add(className);
    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

  displayTable(elemlist) {
    //     if (elemlist.length.x || elemlist.y.length === 0) {
    // add in wrapperTable text if []
    const p = this.createElement('p');
    p.textContent = 'Add a data?';
    this.list.append(p);
    //     }
  }
}

class Controller {
  constructor(model, view) {
    this.moodel = model;
    this.view = view;
  }
}

const app = new Controller(new Model(), new View());

//user added data in model
// app.moodel.addList(1, 2);
app.view.displayTable();
// app.model.elemlist.x;
// app.model.elemlist.y;
// app.view.createElement(input, dataSet);

// app.view.getElement();
