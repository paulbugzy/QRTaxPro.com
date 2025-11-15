const Module = require('module');
const React = require('react');
const originalRequire = Module.prototype.require;

Module.prototype.require = function (id) {
  if (id === 'react-helmet-async') {
    const mod = originalRequire.call(this, id);
    const OriginalHelmet = mod.Helmet;

    const SafeHelmet = (props) => {
      const safeChildren = React.Children.map(props.children, (child) => {
        if (!React.isValidElement(child)) {
          return typeof child === 'string' || typeof child === 'number' ? child : null;
        }

        if (child.type === 'title') {
          const textContent = React.Children.toArray(child.props.children)
            .filter((node) => typeof node === 'string' || typeof node === 'number')
            .join('');
          return React.createElement(child.type, child.props, textContent);
        }

        return child;
      });

      return React.createElement(OriginalHelmet, props, safeChildren);
    };

    return { ...mod, Helmet: SafeHelmet };
  }

  return originalRequire.apply(this, arguments);
};

require('ts-node').register({
  transpileOnly: true,
  compilerOptions: {
    module: 'Node16',
    moduleResolution: 'node16',
    jsx: 'react-jsx'
  }
});

require('./seed.ts');
