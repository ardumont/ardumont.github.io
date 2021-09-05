{ pkgs, ... }:

let
  package-name = "ardumont.github.io";
  jekyll-env = pkgs.bundlerEnv {
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
  shellHook = ''
      exec ${jekyll-env}/bin/jekyll serve --watch
  '';
}
