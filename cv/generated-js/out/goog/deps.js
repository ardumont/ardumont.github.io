goog.addDependency("string/string.js", ['goog.string', 'goog.string.Unicode'], []);
goog.addDependency("useragent/jscript.js", ['goog.userAgent.jscript'], ['goog.string']);
goog.addDependency("string/stringbuffer.js", ['goog.string.StringBuffer'], ['goog.userAgent.jscript']);
goog.addDependency("string/stringformat.js", ['goog.string.format'], ['goog.string']);
goog.addDependency("object/object.js", ['goog.object'], []);
goog.addDependency("debug/error.js", ['goog.debug.Error'], []);
goog.addDependency("asserts/asserts.js", ['goog.asserts', 'goog.asserts.AssertionError'], ['goog.debug.Error', 'goog.string']);
goog.addDependency("array/array.js", ['goog.array', 'goog.array.ArrayLike'], ['goog.asserts']);
goog.addDependency("useragent/useragent.js", ['goog.userAgent'], ['goog.string']);
goog.addDependency("net/cookies.js", ['goog.net.Cookies', 'goog.net.cookies'], ['goog.userAgent']);
goog.addDependency("dom/browserfeature.js", ['goog.dom.BrowserFeature'], ['goog.userAgent']);
goog.addDependency("dom/tagname.js", ['goog.dom.TagName'], []);
goog.addDependency("dom/classes.js", ['goog.dom.classes'], ['goog.array']);
goog.addDependency("math/coordinate.js", ['goog.math.Coordinate'], []);
goog.addDependency("math/size.js", ['goog.math.Size'], []);
goog.addDependency("dom/dom.js", ['goog.dom', 'goog.dom.DomHelper', 'goog.dom.NodeType'], ['goog.array', 'goog.dom.BrowserFeature', 'goog.dom.TagName', 'goog.dom.classes', 'goog.math.Coordinate', 'goog.math.Size', 'goog.object', 'goog.string', 'goog.userAgent']);
goog.addDependency("events/browserfeature.js", ['goog.events.BrowserFeature'], ['goog.userAgent']);
goog.addDependency("disposable/idisposable.js", ['goog.disposable.IDisposable'], []);
goog.addDependency("disposable/disposable.js", ['goog.Disposable', 'goog.dispose'], ['goog.disposable.IDisposable']);
goog.addDependency("events/event.js", ['goog.events.Event'], ['goog.Disposable']);
goog.addDependency("events/eventtype.js", ['goog.events.EventType'], ['goog.userAgent']);
goog.addDependency("reflect/reflect.js", ['goog.reflect'], []);
goog.addDependency("events/browserevent.js", ['goog.events.BrowserEvent', 'goog.events.BrowserEvent.MouseButton'], ['goog.events.BrowserFeature', 'goog.events.Event', 'goog.events.EventType', 'goog.reflect', 'goog.userAgent']);
goog.addDependency("debug/entrypointregistry.js", ['goog.debug.EntryPointMonitor', 'goog.debug.entryPointRegistry'], ['goog.asserts']);
goog.addDependency("iter/iter.js", ['goog.iter', 'goog.iter.Iterator', 'goog.iter.StopIteration'], ['goog.array', 'goog.asserts']);
goog.addDependency("dom/xml.js", ['goog.dom.xml'], ['goog.dom', 'goog.dom.NodeType']);
goog.addDependency("structs/structs.js", ['goog.structs'], ['goog.array', 'goog.object']);
goog.addDependency("structs/map.js", ['goog.structs.Map'], ['goog.iter.Iterator', 'goog.iter.StopIteration', 'goog.object', 'goog.structs']);
goog.addDependency("dom/forms.js", ['goog.dom.forms'], ['goog.structs.Map']);
goog.addDependency("debug/errorhandlerweakdep.js", ['goog.debug.errorHandlerWeakDep'], []);
goog.addDependency("events/eventwrapper.js", ['goog.events.EventWrapper'], []);
goog.addDependency("events/listener.js", ['goog.events.Listener'], []);
goog.addDependency("events/events.js", ['goog.events'], ['goog.array', 'goog.debug.entryPointRegistry', 'goog.debug.errorHandlerWeakDep', 'goog.events.BrowserEvent', 'goog.events.BrowserFeature', 'goog.events.Event', 'goog.events.EventWrapper', 'goog.events.Listener', 'goog.object', 'goog.userAgent']);
goog.addDependency("math/box.js", ['goog.math.Box'], ['goog.math.Coordinate']);
goog.addDependency("math/rect.js", ['goog.math.Rect'], ['goog.math.Box', 'goog.math.Size']);
goog.addDependency("style/style.js", ['goog.style'], ['goog.array', 'goog.dom', 'goog.math.Box', 'goog.math.Coordinate', 'goog.math.Rect', 'goog.math.Size', 'goog.object', 'goog.string', 'goog.userAgent']);