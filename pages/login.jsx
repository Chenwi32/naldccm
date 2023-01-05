import {
  BreadcrumbLink,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "./components/authprovider";

import { FormProvider, useForm } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const LogIn = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [email, setEmail] = useState();
  const [password, setPassWord] = useState();
  const [isVisible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const methods = useForm({ mode: "onBlur" });

  const { logIn } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await logIn(data.email, data.password);
      router.push("/nationalIdCollection");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Container
      maxW={"unset"}
      minH="80vh"
      h="fit-content"
      w="100%"
      bg={"brand.500"}
      mb={10}
      borderBottomLeftRadius={isLargerThan700 ? "10rem" : "5rem"}
      p={5}
    >
      <Flex
        m="auto"
        flexDirection={"column"}
        maxW={700}
        p={5}
        alignItems="center"
        textAlign={"left"}
      >
        <Heading color={"brand.300"} fontSize={"1.5rem"} mb={5}>
          Log In
        </Heading>

        {/* {errorMessage === "" ? (
            <></>
          ) : (
            <Announcement message={errorMessage} type={"error"} />
          )} */}
        <FormProvider {...methods}>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <Flex flexDirection={"column"} w={"100%"} alignItems={"center"}>
              <Flex flexDirection={"column"} alignItems={"flex-start"} mb={5}>
                <Text color="brand.300">Email:</Text>
                <input
                  {...register("email", { required: "Email is required" })}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email"
                  className={`main_input `}
                  type="email"
                  value={email}
                  required
                />

                {errors.email && (
                  <Text color={"red"}>
                    {" "}
                    <small>{errors.email.message}</small>{" "}
                  </Text>
                )}
              </Flex>

              <Flex flexDirection={"column"} alignItems={"flex-start"} mb={10}>
                <Text color="brand.300">Password:</Text>

                <Flex gap={0} p={0} h="fit-content">
                  <input
                    {...register("password", {
                      required: "Password is required",
                    })}
                    type={isVisible ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassWord(e.target.value);
                    }}
                    placeholder="Password"
                    className={`main_input `}
                    required
                  />

                  <Flex
                    color="brand.500"
                    p={"0.2rem 0.5rem"}
                    alignItems={"center"}
                    ml={"-2rem"}
                    borderTopRightRadius={5}
                    borderBottomRightRadius={5}
                  >
                    <Icon
                      fontSize={"1rem"}
                      onClick={() => {
                        if (isVisible) {
                          setVisible(false);
                        } else {
                          setVisible(true);
                        }
                      }}
                    >
                      <FontAwesomeIcon icon={isVisible ? faEye : faEyeSlash} />
                    </Icon>
                  </Flex>
                </Flex>

                {errors.password && (
                  <Text color={"red"}>
                    {" "}
                    <small>{errors.password.message}</small>{" "}
                  </Text>
                )}
              </Flex>

              <Button
                bg="brand.100"
                color="brand.300"
                _hover={{
                  bg: "brand.400",
                }}
                p={5}
                mb={10}
                type="submit"
                w={"100%"}
              >
                Log In
              </Button>
            </Flex>
          </form>
        </FormProvider>
      </Flex>
    </Container>
  );
};

export default LogIn;
