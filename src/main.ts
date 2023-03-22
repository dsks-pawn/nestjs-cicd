import { NestFactory } from '@nestjs/core';
import {
  GraphPublisher,
  PublishGraphOptions,
} from '@nestjs/devtools-integration';
import { AppModule } from './app.module';

async function bootstrap() {
  const shouldPublishGraph = process.env.PUBLISH_GRAPH === 'true';

  const app = await NestFactory.create(AppModule, {
    snapshot: true,
    // preview: shouldPublishGraph,
  });

  // if (shouldPublishGraph) {
  //   await app.init();

  //   const publishOptions = {
  //     apiKey: process.env.DEVTOOLS_API_KEY,
  //     repository: process.env.REPOSITORY_NAME,
  //     owner: process.env.GITHUB_REPOSITORY_OWNER,
  //     sha: process.env.COMMIT_SHA,
  //     target: process.env.TARGET_SHA,
  //     trigger: process.env.GITHUB_BASE_REF ? 'pull' : 'push',
  //     branch: process.env.BRANCH_NAME,
  //   } as PublishGraphOptions; // NOTE: this options object will vary depending on the CI/CD provider you're using
  //   const graphPublisher = new GraphPublisher(app);
  //   await graphPublisher.publish(publishOptions);

  //   await app.close();
  // } else {
  await app.listen(3000);
  // }
}
bootstrap();
