// AirRobe shopify plugin prototype
// Modify the product page by embedding markup that includes a checkbox
// When the checkbox is clicked, set some attributes on the cart

function isProductPage() {
  document.getElementsByClassName("shopify-section-product-template").length >
    0;
  return window.location.pathname === "/cart";
}

function mountProductPage() {
  function handleCheckboxCheck(event) {
    var checkbox = event.target;

    jQuery.post(
      "/cart/update.js",
      "attributes[Opted in to Air Robe Circular Wardrobe]=" + checkbox.checked
    );
  }

  function makeCheckbox() {
    var container = document.createElement("div");
    var checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "air-robe-opt-in";

    var label = document.createElement("label");

    label.htmlFor = "air-robe-opt-in";

    label.appendChild(
      document.createTextNode(
        "Add this item to your free Circular Wardrobe, powered by AirRobe"
      )
    );

    checkbox.addEventListener("click", handleCheckboxCheck);

    container.appendChild(checkbox);
    container.appendChild(label);

    return container;
  }

  function getMountNode() {
    return document.getElementsByClassName("cart__buttons-container")[0];
  }

  function addCheckboxInput() {
    var mountNode = getMountNode();
    var contentNode = makeCheckbox();

    mountNode.insertBefore(contentNode, mountNode.children[0]);
  }
}

if (isCheckoutPage()) addCheckboxInput();
