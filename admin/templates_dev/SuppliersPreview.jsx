/** @jsxRuntime classic */
import React from "react";


class SuppliersPreview extends React.Component {
  render() {
    var entry = this.props.entry;

    var item = entry.get('data');

    console.log(" item.get(\"f_includes\") ", item.get("f_includes").toJS())

    console.log(" this.fieldsMetaData ", this.props.fieldsMetaData.toJS())

    const fieldsMetaData = this.props.fieldsMetaData.toJS();

    return (<div>
      <h3>Contact Details:</h3>
      Name: {item.get("f_contact-name")}<br/>
      Email: {item.get("f_contact-email")}<br/>
      Phone: {item.get("f_contact-phone")}

      <div className="supplier-card">
        item.get
        <a href={item.get(`f_url`)} target="_blank"><h3 className="supplier-name">{item.get("f_display-name")}</h3>
        </a>
        <div>{item.get("f_basic-category-2")}</div>

        <div className="supplier-data-wrapper">

          <div className="supplier-data-item price">
            <div className="supplier-data-item-title">Price</div>
            <div className="supplier-data-entry">{item.get("f_cost")}</div>
            <div className="tooltip-wrapper-text"><p>{item.get("f_cost-details-2")}</p></div>
          </div>

          <div className="supplier-data-item delivery">
            <div className="supplier-data-item-title">Delivery</div>
            <div className="supplier-data-entry">{item.get("f_ship-time")}</div>
            <div className="tooltip-wrapper-text"><p>{item.get("f_ship-time-details")}</p></div>
          </div>

        </div>
        <div className="supplier-data-wrapper">

          <div className="supplier-data-item ages">
            <div className="supplier-data-item-title">Ages</div>
            <div className="supplier-data-entry data-ages">{item.get("f_ages-served")}</div>
            <div className="tooltip-wrapper-text"><p>{item.get("f_ages-served-details")}</p></div>
          </div>

          <div className="supplier-data-item gestation">
            <div className="supplier-data-item-title">For use</div>
            <div className="supplier-data-entry data-ages">{item.get("f_gestational-age-dropdown")}</div>

          </div>

        </div>

        <div>

          <div className="supplier-details-header">Includes</div>

          {item.get("f_includes").map(function (i, index) {
            if (fieldsMetaData?.['f_includes'] && fieldsMetaData?.['f_includes']['supplier_options']?.[i]?.title) {
              return <div className="key-terms-item-wrapper" key={`awdawd${index}`}>
                <div className="key-terms-icon">
                  <img src={fieldsMetaData['f_includes']['supplier_options'][i]['f_icon']['url']} />
                </div>
                {fieldsMetaData['f_includes']['supplier_options'][i]['title']} - {fieldsMetaData['f_includes']['supplier_options'][i]['f_display-name']}
              </div>;
            }
          })}

          <div className="supplier-details-header">Financial Support</div>


          <div className="key-terms-item-wrapper">
            <div className="key-terms-icon"><img
              src="https://global-uploads.webflow.com/5f7e0692875fa8243cac6673/63beeaaedc3f516b64ac50d2_icons8-done-48.png"/>
            </div>
            <div className="key-terms-description">{item.get("f_financial-assistance")}</div>
          </div>

          {item.get("f_accepts-insurance") &&
            <div className="key-terms-item-wrapper">
              <div className="key-terms-icon"><img
                src="https://global-uploads.webflow.com/5f7e0692875fa8243cac6673/63beeaaedc3f516b64ac50d2_icons8-done-48.png"/>
              </div>
              <div className="key-terms-description">{item.get("f_accepts-insurance")}</div>
            </div>
          }

          {item.get("f_accepts-medicaid") &&
            <div className="key-terms-item-wrapper">
              <div className="key-terms-icon"><img
                src="https://global-uploads.webflow.com/5f7e0692875fa8243cac6673/63beeaaedc3f516b64ac50d2_icons8-done-48.png"/>
              </div>
              <div className="key-terms-description">{item.get("f_accepts-medicaid")}</div>
            </div>
          }

          {item.get("f_sliding-scale") &&
            <div className="key-terms-item-wrapper">
              <div className="key-terms-icon"><img
                src="https://global-uploads.webflow.com/5f7e0692875fa8243cac6673/63beeaaedc3f516b64ac50d2_icons8-done-48.png"/>
              </div>
              <div className="key-terms-description">{item.get("f_offers-sliding-scale-pricing")}</div>
            </div>
          }

          {item.get("f_abortion-funds") &&
            <div className="key-terms-item-wrapper">
              <div className="key-terms-icon"><img
                src="https://global-uploads.webflow.com/5f7e0692875fa8243cac6673/63beeaaedc3f516b64ac50d2_icons8-done-48.png"/>
              </div>
              <div className="key-terms-description">{item.get("f_can-help-you-connect-with-abortion-funds")}</div>
            </div>
          }


          <div className="supplier-details-header">Details</div>

          {item.get("f_advance-provision") &&
            <div className="key-terms-item-wrapper">
              <div className="key-terms-icon"><img
                src="https://uploads-ssl.webflow.com/5f7e07d162248b2c1139d2ef/620456408e9150846f86e2f7_icons8-future-48.png"/>
              </div>
              <div className="key-terms-description">{item.get("f_offers-advance-provision")}</div>
            </div>
          }

          <div className="key-terms-item-wrapper">
            <div className="key-terms-description-bullets">{item.get("f_additional-bullet-point-information")}</div>
          </div>

          {item.get("f_legal-level-text") === "Yes" &&
            <div className="key-terms-item-wrapper">
              <div className="key-terms-icon"><img
                src="https://global-uploads.webflow.com/5f7e0692875fa8243cac6673/62782e2511ba11cae852a344_icons8-alert-96.png"/>
              </div>
              <div className="key-terms-description"><a href="#" data-w-id="12c4bdec-79fa-48bc-648f-69d24983fd7d"
                                                        className="popup-link">Learn about the potential legal
                risk</a> of
                using this service
              </div>
            </div>
          }

        </div>

        <div className="supplier-about-wrapper">
          <div className="supplier-details-header">About this provider</div>
          <window.ReactMarkdown>{item.get("body")}</window.ReactMarkdown>
        </div>

      </div>
    </div>)

      ;

  }
  }
