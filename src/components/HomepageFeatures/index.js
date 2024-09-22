import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Compiler frameworks like LLVM, GCC, MLIR, and TVM are designed with powerful 
        abstractions that simplify the process of code compilation, optimization, and 
        machine learning model deployment, making them easier to adopt and integrate.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Compiler frameworks like <code>LLVM</code>,<code>GCC</code>, <code>MLIR</code>, and <code>TVM</code> are designed to handle
        the complexities of code optimization and hardware targeting, so you can 
        focus on building better software, languages, and machine learning models 
        without getting bogged down by low-level details.
      </>
    ),
  },
  {
    title: 'Powered by Open Source',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        LLVM, GCC, TVM, and MLIR. These open-source projects have revolutionized the fields of compilers, 
        machine learning, and system optimization, allowing developers to harness cutting-edge technology 
        while contributing to a shared global ecosystem.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
