{
  description = "ardumont.github.io flake";

  inputs = {
    nixpkgs = {
      type = "github";
      owner = "NixOS";
      repo = "nixpkgs";
      ref = "nixpkgs-unstable";
      follows = "nix/nixpkgs";
    };

    flake-utils = {
      type = "github";
      owner = "numtide";
      repo = "flake-utils";
      ref = "master";
    };
  };

  outputs = { self, nix, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem
      (system:
        let lib = nixpkgs.lib;
            pkgs = nixpkgs.legacyPackages.${system};
        in {
          devShell = let
            package-name = "ardumont.github.io";
            jekyll-env = pkgs.bundlerEnv {
              name = package-name;
              gemdir = ./.;
            };
            in pkgs.mkShell {
              name = package-name;
              buildInputs = with pkgs; [
                libffi
                zlib
                ruby.devEnv
                jekyll
                gitAndTools.gitFull
                bundler
                bundix
              ];
              src = null;
              # For maintenance, drop the shellHook to enter the shell
              # and run targets from Makefile
              shellHook = ''
                exec ${jekyll-env}/bin/jekyll serve --watch
              '';
            };
        });
}
