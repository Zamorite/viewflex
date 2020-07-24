import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        padding: 15,
        paddingTop: "10%",
        // backgroundColor: "red",
        justifyContent: "space-around",
        height: "100%",
      }}
    >
      <View>
        <Text style={{ fontSize: 24, textAlign: "center", fontWeight: "bold" }}>
          ViewFlex !
        </Text>
      </View>
      <View
        style={{
          height: "15%",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            backgroundColor: "lightblue",
            width: "45%",
            height: "100%",
            padding: "5%",
            paddingHorizontal: "2.5%",
            flexDirection: "row",
            // alignContent: "stretch",
            justifyContent: "space-around",
            borderRadius: 7.5,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              marginHorizontal: "5%",
              flex: 1,
              borderRadius: 3,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "white",
              marginHorizontal: "5%",
              flex: 1,
              borderRadius: 3,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "white",
              marginHorizontal: "5%",
              flex: 1,
              borderRadius: 3,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "white",
              marginHorizontal: "5%",
              flex: 1,
              borderRadius: 3,
            }}
          ></View>
        </View>
        <View
          style={{
            backgroundColor: "lightblue",
            width: "45%",
            height: "100%",
            padding: "5%",
            paddingHorizontal: "2.5%",
            flexDirection: "row",
            borderRadius: 7.5,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              marginHorizontal: "5%",
              borderRadius: 3,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "white",
              flex: 2,
              marginHorizontal: "5%",
              borderRadius: 3,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              marginHorizontal: "5%",
              borderRadius: 3,
            }}
          ></View>
        </View>
        {/* <Text>Is this even working?! 👀</Text> */}
      </View>
      <View
        style={{
          height: "15%",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            backgroundColor: "lightblue",
            width: "45%",
            height: "100%",
            padding: "5%",
            // paddingHorizontal: "2.5%",
            paddingVertical: "2.5%",
            // flexDirection: "row",
            borderRadius: 7.5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginVertical: "5%",
              // padding: "5%",
              flex: 1,
              // paddingHorizontal: "2.5%",
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                borderRadius: 3,
                marginRight: "5%",
              }}
            ></View>
            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                borderRadius: 3,
                marginLeft: "5%",
              }}
            ></View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginVertical: "5%",
              // padding: "5%",
              flex: 1,
              borderRadius: 3,
              // paddingHorizontal: "2.5%",
              backgroundColor: "white",
            }}
          >
            {/* <View style={{ flex: 1, backgroundColor: "white", borderRadius: 3, marginHorizontal: '2.5%' }}></View>
            <View style={{ flex: 1, backgroundColor: "white", borderRadius: 3, marginHorizontal: '2.5%' }}></View> */}
          </View>
          <View
            style={{
              flexDirection: "row",
              marginVertical: "5%",
              // padding: "5%",
              flex: 1,
              // paddingHorizontal: "2.5%",
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                borderRadius: 3,
                marginRight: "5%",
              }}
            ></View>
            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                borderRadius: 3,
                marginLeft: "5%",
              }}
            ></View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "lightblue",
            width: "45%",
            height: "100%",
            padding: "5%",
            borderRadius: 7.5,
          }}
        >
          <View
            style={{
              flex: 1,
              marginBottom: "5%",
              flexDirection: "row",
              // backgroundColor: "white",
            }}
          >
            <View
              style={{
                marginEnd: "5%",
                flex: 1,
                backgroundColor: "white",
                borderRadius: 3,
              }}
            ></View>
            <View
              style={{
                marginHorizontal: "5%",
                flex: 1,
                backgroundColor: "white",
                borderRadius: 3,
              }}
            ></View>
            <View
              style={{
                marginStart: "5%",
                flex: 1,
                backgroundColor: "white",
                borderRadius: 3,
              }}
            ></View>
          </View>
          <View
            style={{
              flex: 1,
              marginVertical: "5%",
              flexDirection: "row",
              // backgroundColor: "white",
            }}
          >
            <View
              style={{
                marginEnd: "5%",
                flex: 1,
                backgroundColor: "white",
                borderRadius: 3,
              }}
            ></View>
            <View
              style={{
                marginHorizontal: "5%",
                flex: 1,
                backgroundColor: "white",
                borderRadius: 3,
              }}
            ></View>
            <View
              style={{
                marginStart: "5%",
                flex: 1,
                backgroundColor: "white",
                borderRadius: 3,
              }}
            ></View>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: "5%",
              flexDirection: "row",
              // backgroundColor: "white",
            }}
          >
            <View
              style={{
                marginEnd: "5%",
                flex: 1,
                backgroundColor: "white",
                borderRadius: 3,
              }}
            ></View>
            <View
              style={{
                marginHorizontal: "5%",
                flex: 1,
                backgroundColor: "white",
                borderRadius: 3,
              }}
            ></View>
            <View
              style={{
                marginStart: "5%",
                flex: 1,
                backgroundColor: "white",
                borderRadius: 3,
              }}
            ></View>
          </View>
        </View>
      </View>
      <View
        style={{
          height: "15%",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            backgroundColor: "lightblue",
            width: "45%",
            height: "100%",
            padding: "5%",
            paddingHorizontal: "2.5%",
            flexDirection: "row",
            alignItems: "flex-end",
            // alignContent: "stretch",
            borderRadius: 7.5,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              marginHorizontal: "5%",
              borderRadius: 3,
              height: "45%",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              marginHorizontal: "5%",
              borderRadius: 3,
              height: "50%",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              marginHorizontal: "5%",
              borderRadius: 3,
              height: "75%",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              marginHorizontal: "5%",
              borderRadius: 3,
              height: "20%",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              marginHorizontal: "5%",
              borderRadius: 3,
              height: "30%",
            }}
          ></View>
        </View>
        <View
          style={{
            backgroundColor: "lightblue",
            width: "45%",
            height: "100%",
            padding: "5%",
            paddingHorizontal: "2.5%",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 7.5,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              marginHorizontal: "5%",
              borderRadius: 3,
              height: "30%",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              marginHorizontal: "5%",
              borderRadius: 3,
              height: "50%",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              marginHorizontal: "5%",
              borderRadius: 3,
              height: "25%",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              marginHorizontal: "5%",
              borderRadius: 3,
              height: "50%",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              marginHorizontal: "5%",
              borderRadius: 3,
              height: "30%",
            }}
          ></View>
        </View>
      </View>
      <View
        style={{
          height: "15%",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            backgroundColor: "lightblue",
            width: "45%",
            height: "100%",
            padding: "5%",
            borderRadius: 7.5,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              marginVertical: "2.5%",
              borderRadius: 3,
              width: "65%",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              marginVertical: "2.5%",
              borderRadius: 3,
              width: "75%",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              marginVertical: "2.5%",
              borderRadius: 3,
              width: "50%",
            }}
          ></View>
        </View>
        <View
          style={{
            backgroundColor: "lightblue",
            width: "45%",
            height: "100%",
            padding: "5%",
            // flexDirection: "row",
            alignItems: "center",
            borderRadius: 7.5,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              marginVertical: "2.5%",
              borderRadius: 3,
              width: "65%",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              marginVertical: "2.5%",
              borderRadius: 3,
              width: "75%",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              marginVertical: "2.5%",
              borderRadius: 3,
              width: "50%",
            }}
          ></View>
        </View>
      </View>
      <View
        style={{
          height: "15%",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            backgroundColor: "lightblue",
            width: "45%",
            height: "100%",
            padding: "5%",
            // flexDirection: "row",
            alignItems: "center",
            borderRadius: 7.5,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              marginVertical: "2.5%",
              borderRadius: 3,
              width: "75%",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              marginVertical: "2.5%",
              borderRadius: 3,
              width: "75%",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              marginVertical: "2.5%",
              borderRadius: 3,
              width: "75%",
            }}
          ></View>
        </View>
        <View
          style={{
            backgroundColor: "lightblue",
            width: "45%",
            height: "100%",
            padding: "5%",
            flexDirection: "row",
            borderRadius: 7.5,
          }}
        >
          <View
            style={{
              flex: 1,
              marginRight: "5%",
            }}
          >
            <View
              style={{
                marginBottom: "15%",
                flex: 1,
                backgroundColor: "white",
                borderRadius: 3,
              }}
            ></View>
            <View
              style={{
                marginTop: "15%",
                flex: 2,
                backgroundColor: "white",
                borderRadius: 3,
              }}
            ></View>
          </View>
          <View
            style={{
              flex: 1,
              marginHorizontal: "5%",
            }}
          >
            <View
              style={{
                flex: 2,
                marginBottom: "15%",
                backgroundColor: "white",
                borderRadius: 3,
              }}
            ></View>
            <View
              style={{
                marginTop: "15%",
                flex: 1,
                backgroundColor: "white",
                borderRadius: 3,
              }}
            ></View>
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: "5%",
            }}
          >
            <View
              style={{
                marginBottom: "15%",
                flex: 1,
                backgroundColor: "white",
                borderRadius: 3,
              }}
            ></View>
            <View
              style={{
                marginTop: "15%",
                flex: 2,
                backgroundColor: "white",
                borderRadius: 3,
              }}
            ></View>
          </View>
        </View>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
