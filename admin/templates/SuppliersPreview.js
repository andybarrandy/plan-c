/** @jsxRuntime classic */

var SuppliersPreview = createClass({
  render() {
    var entry = this.props.entry;
    var item = entry.get('data');
    console.log(" item.get(\"f_includes\") ", item.get("f_includes").toJS());
    return /*#__PURE__*/h("div", null, /*#__PURE__*/h("h3", null, "Contact Details:"), "Name: ", item.get("f_contact-name"), /*#__PURE__*/h("br", null), "Email: ", item.get("f_contact-email"), /*#__PURE__*/h("br", null), "Phone: ", item.get("f_contact-phone"), /*#__PURE__*/h("div", {
      className: "supplier-card"
    }, "item.get", /*#__PURE__*/h("a", {
      href: item.get(`f_url`),
      target: "_blank"
    }, /*#__PURE__*/h("h3", {
      className: "supplier-name"
    }, item.get("f_display-name"))), /*#__PURE__*/h("div", null, item.get("f_basic-category-2")), /*#__PURE__*/h("div", {
      className: "supplier-data-wrapper"
    }, /*#__PURE__*/h("div", {
      className: "supplier-data-item price"
    }, /*#__PURE__*/h("div", {
      className: "supplier-data-item-title"
    }, "Price"), /*#__PURE__*/h("div", {
      className: "supplier-data-entry"
    }, item.get("f_cost")), /*#__PURE__*/h("div", {
      className: "tooltip-wrapper-text"
    }, /*#__PURE__*/h("p", null, item.get("f_cost-details-2")))), /*#__PURE__*/h("div", {
      className: "supplier-data-item delivery"
    }, /*#__PURE__*/h("div", {
      className: "supplier-data-item-title"
    }, "Delivery"), /*#__PURE__*/h("div", {
      className: "supplier-data-entry"
    }, item.get("f_ship-time")), /*#__PURE__*/h("div", {
      className: "tooltip-wrapper-text"
    }, /*#__PURE__*/h("p", null, item.get("f_ship-time-details"))))), /*#__PURE__*/h("div", {
      className: "supplier-data-wrapper"
    }, /*#__PURE__*/h("div", {
      className: "supplier-data-item ages"
    }, /*#__PURE__*/h("div", {
      className: "supplier-data-item-title"
    }, "Ages"), /*#__PURE__*/h("div", {
      className: "supplier-data-entry data-ages"
    }, item.get("f_ages-served")), /*#__PURE__*/h("div", {
      className: "tooltip-wrapper-text"
    }, /*#__PURE__*/h("p", null, item.get("f_ages-served-details")))), /*#__PURE__*/h("div", {
      className: "supplier-data-item gestation"
    }, /*#__PURE__*/h("div", {
      className: "supplier-data-item-title"
    }, "For use"), /*#__PURE__*/h("div", {
      className: "supplier-data-entry data-ages"
    }, item.get("f_gestational-age-dropdown")))), /*#__PURE__*/h("div", null, /*#__PURE__*/h("div", {
      className: "supplier-details-header"
    }, "Includes"), item.get("f_includes").map(function (i, index) {
      return /*#__PURE__*/h("div", {
        className: "key-terms-item-wrapper"
      }, /*#__PURE__*/h("div", {
        className: "key-terms-icon"
      }, "f_icon"), /*#__PURE__*/h("div", {
        className: "key-terms-description"
      }, "f_display-name"));
    }), /*#__PURE__*/h("div", {
      className: "supplier-details-header"
    }, "Financial Support"), /*#__PURE__*/h("div", {
      className: "key-terms-item-wrapper"
    }, /*#__PURE__*/h("div", {
      className: "key-terms-icon"
    }, /*#__PURE__*/h("img", {
      src: "https://global-uploads.webflow.com/5f7e0692875fa8243cac6673/63beeaaedc3f516b64ac50d2_icons8-done-48.png"
    })), /*#__PURE__*/h("div", {
      className: "key-terms-description"
    }, item.get("f_financial-assistance"))), item.get("f_accepts-insurance") && /*#__PURE__*/h("div", {
      className: "key-terms-item-wrapper"
    }, /*#__PURE__*/h("div", {
      className: "key-terms-icon"
    }, /*#__PURE__*/h("img", {
      src: "https://global-uploads.webflow.com/5f7e0692875fa8243cac6673/63beeaaedc3f516b64ac50d2_icons8-done-48.png"
    })), /*#__PURE__*/h("div", {
      className: "key-terms-description"
    }, item.get("f_accepts-insurance"))), item.get("f_accepts-medicaid") && /*#__PURE__*/h("div", {
      className: "key-terms-item-wrapper"
    }, /*#__PURE__*/h("div", {
      className: "key-terms-icon"
    }, /*#__PURE__*/h("img", {
      src: "https://global-uploads.webflow.com/5f7e0692875fa8243cac6673/63beeaaedc3f516b64ac50d2_icons8-done-48.png"
    })), /*#__PURE__*/h("div", {
      className: "key-terms-description"
    }, item.get("f_accepts-medicaid"))), item.get("f_sliding-scale") && /*#__PURE__*/h("div", {
      className: "key-terms-item-wrapper"
    }, /*#__PURE__*/h("div", {
      className: "key-terms-icon"
    }, /*#__PURE__*/h("img", {
      src: "https://global-uploads.webflow.com/5f7e0692875fa8243cac6673/63beeaaedc3f516b64ac50d2_icons8-done-48.png"
    })), /*#__PURE__*/h("div", {
      className: "key-terms-description"
    }, item.get("f_offers-sliding-scale-pricing"))), item.get("f_abortion-funds") && /*#__PURE__*/h("div", {
      className: "key-terms-item-wrapper"
    }, /*#__PURE__*/h("div", {
      className: "key-terms-icon"
    }, /*#__PURE__*/h("img", {
      src: "https://global-uploads.webflow.com/5f7e0692875fa8243cac6673/63beeaaedc3f516b64ac50d2_icons8-done-48.png"
    })), /*#__PURE__*/h("div", {
      className: "key-terms-description"
    }, item.get("f_can-help-you-connect-with-abortion-funds"))), /*#__PURE__*/h("div", {
      className: "supplier-details-header"
    }, "Details"), item.get("f_advance-provision") && /*#__PURE__*/h("div", {
      className: "key-terms-item-wrapper"
    }, /*#__PURE__*/h("div", {
      className: "key-terms-icon"
    }, /*#__PURE__*/h("img", {
      src: "https://uploads-ssl.webflow.com/5f7e07d162248b2c1139d2ef/620456408e9150846f86e2f7_icons8-future-48.png"
    })), /*#__PURE__*/h("div", {
      className: "key-terms-description"
    }, item.get("f_offers-advance-provision"))), /*#__PURE__*/h("div", {
      className: "key-terms-item-wrapper"
    }, /*#__PURE__*/h("div", {
      className: "key-terms-description-bullets"
    }, item.get("f_additional-bullet-point-information"))), item.get("f_legal-level-text") === "Yes" && /*#__PURE__*/h("div", {
      className: "key-terms-item-wrapper"
    }, /*#__PURE__*/h("div", {
      className: "key-terms-icon"
    }, /*#__PURE__*/h("img", {
      src: "https://global-uploads.webflow.com/5f7e0692875fa8243cac6673/62782e2511ba11cae852a344_icons8-alert-96.png"
    })), /*#__PURE__*/h("div", {
      className: "key-terms-description"
    }, /*#__PURE__*/h("a", {
      href: "#",
      "data-w-id": "12c4bdec-79fa-48bc-648f-69d24983fd7d",
      className: "popup-link"
    }, "Learn about the potential legal risk"), " of using this service"))), /*#__PURE__*/h("div", {
      className: "supplier-about-wrapper"
    }, /*#__PURE__*/h("div", {
      className: "supplier-details-header"
    }, "About this provider"), item.get("body"))));
  }
}
)