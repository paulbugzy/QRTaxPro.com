import { Buffer } from 'buffer';

const globalAny = global as any;

if (typeof globalAny.SlowBuffer === 'undefined') {
  const LegacySlowBuffer = (Buffer as any).SlowBuffer;

  if (typeof LegacySlowBuffer === 'function') {
    globalAny.SlowBuffer = LegacySlowBuffer;
  } else {
    const FallbackSlowBuffer = function (length: number) {
      return Buffer.alloc(length);
    };
    FallbackSlowBuffer.prototype = Buffer.prototype;
    globalAny.SlowBuffer = FallbackSlowBuffer;
  }
}
