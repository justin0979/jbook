declare module "*.svg" {
  const ReactComponent: React.FunctionComponent<
    React.SVGAttributes<SVGElement>
  >;
  const content: string;
  export default content;
}
