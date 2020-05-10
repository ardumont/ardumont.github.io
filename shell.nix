with import <nixpkgs> {};

let
  sources = import ./nix/sources.nix;
  pkgs = import sources.nixpkgs { inherit system; };
  package-name = "ardumont.github.io";
  jekyll-env = bundlerEnv {
    name = package-name;
    inherit ruby;
    gemdir = ./.;
  };
in stdenv.mkDerivation rec {
  name = package-name;
  buildInputs = with pkgs; [
    libffi
    zlib
    ruby
    jekyll
    gitAndTools.gitFull
    bundler
    bundix
  ];
  src = null;
  # Add this for nix-shell to just run locally
  # shellHook = ''
  #     exec ${jekyll-env}/bin/jekyll serve --watch
  # '';
}
