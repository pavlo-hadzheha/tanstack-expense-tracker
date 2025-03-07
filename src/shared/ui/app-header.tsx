"use client";

import { Button, Container, Group, Menu } from "@mantine/core";
import { CaretDown } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";

function AppHeader() {
  return (
    <>
      <Container className="flex items-center h-full px-5">
        <div className="text-4xl">
          <span className="font-medium">WISDM</span>
          <span className="font-bold text-red-900">LABS</span>
        </div>
        <div className="text-4xl ml-8 font-bold">QA IR</div>
        <div className="mx-auto" />
        <Group>
          <Button
            component={Link}
            href="/"
            className="text-md"
            variant="transparent"
          >
            Home
          </Button>
          <Menu>
            <Menu.Target>
              <Button
                variant="transparent"
                className="text-md"
                rightSection={<CaretDown size={16} />}
              >
                Shop
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>Some</Menu.Item>
              <Menu.Item>Some</Menu.Item>
              <Menu.Item>Some</Menu.Item>
              <Menu.Item>Some</Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Menu>
            <Menu.Target>
              <Button
                variant="transparent"
                className="text-md"
                rightSection={<CaretDown size={16} />}
              >
                My Account
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>Some</Menu.Item>
              <Menu.Item>Some</Menu.Item>
              <Menu.Item>Some</Menu.Item>
              <Menu.Item>Some</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
    </>
  );
}
export { AppHeader };
