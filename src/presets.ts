import { IPreset } from "./type";

export const PRESETS: IPreset[]= [
  {
    name: "Classic_Green",
    editable: true,
    previewImages: [
      "https://app.supergrow.ai/static/media/slide-1.4368b18788492d03be17.png",
      "https://app.supergrow.ai/static/media/slide-1.4368b18788492d03be17.png",
      "https://app.supergrow.ai/static/media/slide-3.7125068ac26152534ccb.png",
      "https://app.supergrow.ai/static/media/slide-4.2c9c4dc0ca46602010e9.png",
      "https://app.supergrow.ai/static/media/slide-5.021d1adfc2a58db2fae1.png",
    ],
    carousel: {
      "slides": [
        {
          "elements": [
            {
              "type": "text",
              "label": "Title",
              "style": {
                "color": {
                  "key": "white"
                },
                "fontSize": {
                  "value": "72px"
                },
                "fontFamily": {
                  "key": "serif"
                },
                "fontWeight": {
                  "value": "400"
                }
              },
              "value": "HOW TO WRITE HOOK THAT DON'T SUCK",
              "max_words": 5,
              "target_key": "title"
            },
            {
              "type": "image",
              "label": "Image(Recommended size 400 x 500)",
              "value": "https://app.supergrow.ai/static/media/template-image.3b2d960960d4626e9ae6.png",
              "target_key": "image"
            }
          ],
          "slide_type": "intro"
        },
        {
          "elements": [
            {
              "type": "text",
              "label": "Title",
              "style": {
                "color": {
                  "key": "secondary_color"
                },
                "fontSize": {
                  "value": "60px"
                },
                "fontFamily": {
                  "key": "primary_font"
                },
                "fontWeight": {
                  "value": "400"
                }
              },
              "value": "KEEP IT SHORT",
              "max_words": 5,
              "target_key": "title"
            },
            {
              "type": "multiline",
              "label": "Description",
              "style": {
                "color": {
                  "key": "secondary_color"
                },
                "fontSize": {
                  "value": "18px"
                },
                "fontFamily": {
                  "key": "secondary_font"
                },
                "fontWeight": {
                  "value": "400"
                }
              },
              "value": "Your hook should fit on one line and get a point across quickly.",
              "max_words": 15,
              "target_key": "description"
            }
          ],
          "slide_type": "middle"
        },
        {
          "elements": [
            {
              "type": "text",
              "label": "Title",
              "style": {
                "color": {
                  "key": "secondary_color"
                },
                "fontSize": {
                  "value": "60px"
                },
                "fontFamily": {
                  "key": "primary_font"
                },
                "fontWeight": {
                  "value": "400"
                }
              },
              "value": "TAP INTO EMOTIONS",
              "max_words": 5,
              "target_key": "title"
            },
            {
              "type": "multiline",
              "label": "Description",
              "style": {
                "color": {
                  "key": "secondary_color"
                },
                "fontSize": {
                  "value": "18px"
                },
                "fontFamily": {
                  "key": "secondary_font"
                },
                "fontWeight": {
                  "value": "400"
                }
              },
              "value": "Make your readers feel something when they read your first line.",
              "max_words": 15,
              "target_key": "description"
            }
          ],
          "slide_type": "middle"
        },
        {
          "elements": [
            {
              "type": "text",
              "label": "Title",
              "style": {
                "color": {
                  "key": "secondary_color"
                },
                "fontSize": {
                  "value": "60px"
                },
                "fontFamily": {
                  "key": "primary_font"
                },
                "fontWeight": {
                  "value": "400"
                }
              },
              "value": "ADDRESS A PROBLEM",
              "max_words": 5,
              "target_key": "title"
            },
            {
              "type": "multiline",
              "label": "Description",
              "style": {
                "color": {
                  "key": "secondary_color"
                },
                "fontSize": {
                  "value": "18px"
                },
                "fontFamily": {
                  "key": "secondary_font"
                },
                "fontWeight": {
                  "value": "400"
                }
              },
              "value": "Start with one problem or challenge your reader faces and offer the solution in the body of your post.",
              "max_words": 15,
              "target_key": "description"
            }
          ],
          "slide_type": "middle"
        },
        {
          "elements": [
            {
              "type": "text",



              "label": "CTA Text",
              "style": {
                "color": {
                  "key": "secondary_color"
                },
                "fontSize": {
                  "value": "72px"
                },
                "fontFamily": {
                  "key": "serif"
                },
                "fontWeight": {
                  "value": "400"
                }
              },
              "value": "SHARE YOUR THOUGHTS IN THE COMMENTS",
              "max_words": 3,
              "target_key": "cta_text"
            }
          ],
          "slide_type": "outro"
        }
      ],
      "common_settings": {
        "elements": [
          {
            "type": "text",
            "label": "Your Name",
            "value": "Sandra Macele"
          },
          {
            "key": "logo",
            "type": "logo",
            "label": "Profile Pic",
            "value": {
              "type": "image",
              "image": "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          },
          {
            "type": "text",
            "label": "Handle",
            "value": "@sandra-macele"
          },
          {
            "key": "background_color",
            "type": "background",
            "label": "Background",
            "value": {
              "type": "color",
              "color": "#37474F",
              "image": "",
              "color_options": [
                "#2cd4bf",
                "#38bcf7",
                "#feb022",
                "#f87066",
                "#33d583",
                "#818cf8",
                "#f471b6",
                "#bf84fc"
              ],
              "image_options": [
                {
                  "image": "https://app.supergrow.ai/static/media/bg-option-1.d5aa82137271fe4bfb30.png"
                },
                {
                  "image": "https://app.supergrow.ai/static/media/bg-option-2.2bd1985fccb11b3a8f70.png"
                },
                {
                  "image": "https://app.supergrow.ai/static/media/bg-option-3.54fff7844008ec12bda2.png"
                }
              ]
            }
          },
          {
            "key": "primary_color",
            "type": "color",
            "label": "Primary Color",
            "value": "#1ACD8A",
            "style_key_group": "primary"
          },
          {
            "key": "secondary_color",
            "type": "color",
            "label": "Secondry Color",
            "value": "#FFFFFF",
            "style_key_group": "secondary"
          },
          {
            "key": "primary_font",
            "type": "font",
            "label": "Primary Font",
            "value": "Instrument Serif"
          },
          {
            "key": "secondary_font",
            "type": "font",
            "label": "Secondary Font",
            "value": "Instrument Sans"
          }
        ],
        "swipe_indicator": {
          "image": ""
        }
      }
    },
  },
  {
    name: "Purple",
    editable: false,
    previewImages: [
      "https://app.supergrow.ai/static/media/slide-1.2df36b2e8f949e33786e.png",
      "https://app.supergrow.ai/static/media/slide-2.37101e2f21d8ee68bea0.png",
      "https://app.supergrow.ai/static/media/slide-3.a0b717d00cfd7704864b.png",
      "https://app.supergrow.ai/static/media/slide-4.37101e2f21d8ee68bea0.png",
      "https://app.supergrow.ai/static/media/slide-5.c1cb00ce68557788e98e.png",
    ],
  },
  {
    name: "Azure",
    editable: false,
    previewImages: [
      "https://app.supergrow.ai/static/media/slide-1.ce3b96f7e556e5dd99f4.png",
      "https://app.supergrow.ai/static/media/slide-2.2bd049607eb8bea77725.png",
      "https://app.supergrow.ai/static/media/slide-3.69e171c1f3b1dcb42a1d.png",
      "https://app.supergrow.ai/static/media/slide-4.92371b9c74ed674e48c7.png",
      "https://app.supergrow.ai/static/media/slide-5.2e923d99b52b31b4c5af.png",
    ],
  },
  {
    name: "Tweet",
    editable: false,
    previewImages: [
      "https://app.supergrow.ai/static/media/slide-1.272b5d6fa27b5280590a.png",
      "https://app.supergrow.ai/static/media/slide-2.bb0ccd4c2be781524c62.png",
      "https://app.supergrow.ai/static/media/slide-3.ee48f04d9f56dd86fd8d.png",
      "https://app.supergrow.ai/static/media/slide-4.6e48c49a55f37abf5bad.png",
      "https://app.supergrow.ai/static/media/slide-5.7c89423496b17007d0b6.png",
    ],
  },
  {
    name: "Serif",
    editable: false,
    previewImages: [
      "https://app.supergrow.ai/static/media/slide-1.ad9c161ee81f9fdea582.png",
      "https://app.supergrow.ai/static/media/slide-2.1b4e68f33cc95444880e.png",
      "https://app.supergrow.ai/static/media/slide-3.0aefcb617daa7a517891.png",
      "https://app.supergrow.ai/static/media/slide-4.d57e71d72ee5667aaa19.png",
      "https://app.supergrow.ai/static/media/slide-5.ce28b34b52f3b19fa2f7.png",
    ],
  },
];
