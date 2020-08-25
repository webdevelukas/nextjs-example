import React from "react";
import NextLink from "next/link";

export default function Link(props) {
  const { href, as, children, prefetch, rel, target, ...rest } = props;
  return (
    <NextLink href={href} as={as} prefetch={prefetch} passHref>
      <a target={target} rel={rel} {...rest}>
        {children}
      </a>
    </NextLink>
  );
}
